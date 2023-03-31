import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import { locationsSearchAndFiltersPage } from '../../pages/location/searchandfilters.page'
import { locationsEditLocationPage } from '../../pages/location/locations.editlocation.page'
import * as location from '../../lib/data/location.json'
import assert = require('assert')
import { locationsAddNewLocationPage } from '../../pages/location/locations.addnewlocation.page'
const locationName = location.edit_location.location.locationName
const locationAddress = location.edit_location.location.address
const locationDescription = location.add_new_location.locationDescription
const costDescription = location.add_new_location.locationCostDescription
const locationPhone = location.add_new_location.locationPhone
const locationHours = location.add_new_location.locationHours
const locationEntranceLatitude = location.add_new_location.locationEntranceLatitude
const locationEntranceLongtitude = location.add_new_location.locationEntranceLongtitude

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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await locationsEditLocationPage.editLocationName(newLocationName)
  await basePage.waitForProgressBar()
  await I.see(newLocationName)
  await locationsEditLocationPage.editLocationName(locationName)
  await basePage.waitForProgressBar()
  const name = await I.grabValueFrom(locationsEditLocationPage.locationNameField)

  assert(name === locationName)
}).tag('@dashboard').tag('@C609654')

Scenario('Verify that user is able to pin/unpin photo', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)  
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
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
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.selectParkingAttributes('all')
  await locationsEditLocationPage.updateAllButtonClick()
  await basePage.waitForProgressBar()
  await I.see('Location and its associated stations and plugs successfully updated')
}).tag('@dashboard').tag('@C610007')

Scenario('Verify that user is able to set "Opening Date" and "Opened At"', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.selectOpeningDate()
  await locationsEditLocationPage.selectOpenedAtDate()
  await locationsEditLocationPage.updateAllButtonClick()
  await basePage.waitForProgressBar()
  await I.see('Location and its associated stations and plugs successfully updated')
}).tag('@dashboard').tag('@C610009')

Scenario('Verify that user is able to clear "Opening Date" and "Opened At"', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  const previouslyAddedOpenedAtDate = await I.grabNumberOfVisibleElements(locationsEditLocationPage.openedAtEditButton)
  if (previouslyAddedOpenedAtDate) {
    await locationsEditLocationPage.selectOpeningDate()
    await locationsEditLocationPage.selectOpenedAtDate()
    await locationsEditLocationPage.updateAllButtonClick()
  }
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.clearOpeningDate()
  await locationsEditLocationPage.clearOpenedAt()
}).tag('@dashboard').tag('@C610010')

Scenario('Verify that user is able to edit Description, Phone, Hours and Cost Description', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.editDescriptionPhoneHoursCost(locationDescription, locationPhone, locationHours, costDescription)
  await I.waitForText('Location and its associated stations and plugs successfully updated', basePage.timeoutSec)
  
}).tag('@dashboard').tag('@C610001')

Scenario('Verify that user is able to add entrance coordinates', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.addEntranceCoordinates(locationEntranceLatitude, locationEntranceLongtitude)
  await I.waitForText('Location and its associated stations and plugs successfully updated', basePage.timeoutSec)
  
}).tag('@dashboard').tag('@C650809')

Scenario('Verify that user is able to choose "POI Name"', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.addPOIName('Airport')
  await I.waitForText('Location and its associated stations and plugs successfully updated', basePage.timeoutSec)
  
}).tag('@dashboard').tag('@C657626')

Scenario('Verify that alert is displayed when user reloads page with unsaved changes in "Edit Location" page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await I.waitForElement(locationsAddNewLocationPage.entranceLongitudeField, basePage.timeoutSec)
  await I.fillField(locationsAddNewLocationPage.entranceLongitudeField, locationEntranceLongtitude)
  await locationsPage.locationsButtonClick()
  await I.checkTextInPopUp('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.')
}).tag('@dashboard').tag('@LocationsTests').tag('@C669135')
