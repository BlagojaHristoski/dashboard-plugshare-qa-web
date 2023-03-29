import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import { locationsSearchAndFiltersPage } from '../../pages/location/searchandfilters.page'
import { locationsEditLocationPage } from '../../pages/location/locations.editlocation.page'
import * as location from '../../lib/data/location.json'
import assert = require('assert')
import { locationsAddNewLocationPage } from '../../pages/location/locations.addnewlocation.page'
const locationName = location.edit_location.location.locationName
const locationAddress = location.edit_location.location.address

Feature('Locations Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('Verify that user is able to edit location name', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await locationsEditLocationPage.editLocationName(newLocationName)
  await basePage.waitForProgressBar()
  await I.see(newLocationName)
  await locationsEditLocationPage.editLocationName(locationName)
  await basePage.waitForProgressBar()
  const name = await I.grabTextFrom(locationsEditLocationPage.locationNameTitle)

  assert(name === locationName)
}).tag('@dashboard').tag('@C609654')

Scenario('Verify that user is able to pin/unpin photo', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)  
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.pinPhotos()
  await basePage.waitForProgressBar()
  await I.see('Photo successfully pinned')
  await locationsEditLocationPage.unpinPhotos()
  await basePage.waitForProgressBar()
  await I.see('Photo successfully unpinned')
}).tag('@dashboard').tag('@C650674')

Scenario('Verify that user is able to update Address', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationAddress = `${locationAddress} ${randomNumber}`

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await locationsEditLocationPage.editLocationAddress(newLocationAddress)
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.editLocationAddress(locationAddress)
  await basePage.waitForProgressBar()
  const address = await I.grabValueFrom(locationsAddNewLocationPage.newLocationAddressField)

  assert(address === locationAddress)
}).tag('@dashboard').tag('@C609988')

Scenario('Click on Google on the map', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.navigateToGoogleMapsLocationButtonClick()
  await I.switchToNextTab()
  await I.seeInCurrentUrl('www.google.com/maps')
}).tag('@dashboard').tag('@C609990')

Scenario('Verify that user can see Terrain mode on the map', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.changeMapTypeToTerrain()
  const terrainMap = await I.grabAttributeFrom(basePage.terrainMapType, 'aria-checked')

  assert(terrainMap)
}).tag('@dashboard').tag('@C609991')

Scenario('Verify that user can see Satellite mode on the map', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.changeMapTypeToSatellite()
  const satelliteMap = await I.grabAttributeFrom(basePage.satelliteButtonGoogleMaps, 'aria-checked')

  assert(satelliteMap)
}).tag('@dashboard').tag('@C657492')

Scenario('Verify that user can see Labels on Satellite mode on the map', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.turnOnLabelsOnSatelliteType()
  const labels = await I.grabAttributeFrom(basePage.labelsOnSatelliteTypeButton, 'aria-checked')

  assert(labels)
}).tag('@dashboard').tag('@C609992')

Scenario('Verify that user is able to select Access options', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsAddNewLocationPage.selectAccessForNewLocation('Public')
  await locationsEditLocationPage.updateAllButtonClick()
  await basePage.waitForProgressBar()
  await I.see('Location and its associated stations and plugs successfully updated')
}).tag('@dashboard').tag('@C610002')

Scenario('Verify that user is able to select "Amenities"', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.selectAmenities('all')
  await locationsEditLocationPage.updateAllButtonClick()
  await basePage.waitForProgressBar()
  await I.see('Location and its associated stations and plugs successfully updated')
}).tag('@dashboard').tag('@C610005')

Scenario('Verify that user is able to select "Parking Attributes"', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.selectParkingAttributes('all')
  await locationsEditLocationPage.updateAllButtonClick()
  await basePage.waitForProgressBar()
  await I.see('Location and its associated stations and plugs successfully updated')
}).tag('@dashboard').tag('@C610007')

Scenario('Verify that user is able to set "Opening Date" and "Opened At"', async ({ I }) => {
  await I.waitForEle(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.selectOpeningDate()
  await locationsEditLocationPage.selectOpenedAtDate()
  await locationsEditLocationPage.updateAllButtonClick()
  await basePage.waitForProgressBar()
  await I.see('Location and its associated stations and plugs successfully updated')
}).tag('@dashboard').tag('@C610009')
