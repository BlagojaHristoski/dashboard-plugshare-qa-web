import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import { locationsAddNewLocationPage } from '../../pages/location/locations.addnewlocation.page'
import * as location from '../../lib/data/location.json'
import assert = require('assert')
const locationName = location.add_new_location.locationName
const locationAddress = location.add_new_location.locationAddress
const locationLatitude = location.add_new_location.locationLatitude
const locationLongitude = location.add_new_location.locationLongitude
const locationDescription = location.add_new_location.locationDescription
const costDescription = location.add_new_location.locationCostDescription
const accessOption = location.add_new_location.locationAccess[0]
const stationName = location.add_new_location.stationName
const stationCostDescription = location.add_new_location.locationCostDescription
const costOption = location.add_new_location.stationCost[2]
const killowats = location.add_new_location.plugKilowatts
const plugOption = location.add_new_location.plugs[3]

Feature('Locations Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})
Scenario('Verify that user is navigated to "Add New Location" page on click on "Create New Location" button', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToLocations()
  await I.seeInCurrentUrl('/locations')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614247')

Scenario('Verify that user is able to Create New Location and then is successfully navigated to Edit Location page', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(newLocationName, locationAddress, locationLatitude, locationLongitude, locationDescription, costDescription, accessOption)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  const editLocationTitle = await I.grabTextFrom(locationsPage.editLocationTitle)

  assert(editLocationTitle !== 'Edit Location', 'User is not navigated to the Edit location page')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614248')

Scenario('Verify that user isn\'t able to Create Location leaving Name field empty', async ({ I }) => {
  const emptyName = ''

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(emptyName, locationAddress, locationLatitude, locationLongitude, locationDescription, costDescription, accessOption)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  await locationsAddNewLocationPage.validatePopUpForEmptyField('name')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614432')

Scenario('Verify that user isn\'t able to Create Location leaving Address field empty', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`
  const emptyAddress = ''

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(newLocationName, emptyAddress, locationLatitude, locationLongitude, locationDescription, costDescription, accessOption)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  await locationsAddNewLocationPage.validatePopUpForEmptyField('address')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614433')

Scenario('Verify that user isn\'t able to Create Location leaving Access dropdown empty', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(newLocationName, locationAddress, locationLatitude, locationLongitude, locationDescription, costDescription)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  await locationsAddNewLocationPage.validatePopUpForEmptyField('access')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614434')

Scenario('Verify that user isn\'t able to Create Location leaving Latitude field empty', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`
  const emptyLatitude = ''

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(newLocationName, locationAddress, emptyLatitude, locationLongitude, locationDescription, costDescription, accessOption)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  await locationsAddNewLocationPage.validatePopUpForEmptyField('latitude')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614435')

Scenario('Verify that user isn\'t able to Create Location leaving Longitude field empty', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`
  const emptyLongitude = ''

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(newLocationName, locationAddress, locationLatitude, emptyLongitude, locationDescription, costDescription, accessOption)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  await locationsAddNewLocationPage.validatePopUpForEmptyField('longitude')
}).tag('@dashboard').tag('@LocationsTests').tag('@C614436')

Scenario('Verify that after user creates new location, the location is displayed in location\'s list', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newLocationName = `${locationName} ${randomNumber}`

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsAddNewLocationPage.populateLocationDetailsForNewLocation(newLocationName, locationAddress, locationLatitude, locationLongitude, locationDescription, costDescription, accessOption)
  await locationsAddNewLocationPage.populateStationsForNewLocation(stationName, stationCostDescription, costOption)
  await locationsAddNewLocationPage.populatePlugsForNewLocation(killowats, plugOption)
  await locationsAddNewLocationPage.clickOnCreateLocation()
  await locationsPage.navigateToLocations()
  const addedLocationName = await I.grabTextFrom(locationsPage.firstLocationName)

  assert(addedLocationName !== newLocationName)
}).tag('@dashboard').tag('@LocationsTests').tag('@C650597')

Scenario('Verify that user is able to see that the default value of items per page is 25', async ({ I }) => {
  const numberOfItems = 25

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToLocations()
  await locationsPage.changeItemsPerPageTopDropDown(numberOfItems)
  await basePage.waitForProgressBar()
  const numberOfLocations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  assert(numberOfLocations === numberOfItems)
}).tag('@dashboard').tag('@LocationsTests').tag('@C657630')

Scenario('Verify that user is able to see 5 items per page', async ({ I }) => {
  const numberOfItems = 5

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToLocations()
  await locationsPage.changeItemsPerPageTopDropDown(numberOfItems)
  await basePage.waitForProgressBar()
  const numberOfLocations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  assert(numberOfLocations === numberOfItems)
}).tag('@dashboard').tag('@LocationsTests').tag('@C657628')

Scenario('Verify that user is able to see 10 items per page', async ({ I }) => {
  const numberOfItems = 10

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToLocations()
  await locationsPage.changeItemsPerPageTopDropDown(numberOfItems)
  await basePage.waitForProgressBar()
  const numberOfLocations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  assert(numberOfLocations === numberOfItems)
}).tag('@dashboard').tag('@LocationsTests').tag('@C657629')

Scenario('Verify that user is able to see 100 items per page', async ({ I }) => {
  const numberOfItems = 100

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToLocations()
  await locationsPage.changeItemsPerPageTopDropDown(numberOfItems)
  await basePage.waitForProgressBar()
  const numberOfLocations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  assert(numberOfLocations === numberOfItems)
}).tag('@dashboard').tag('@LocationsTests').tag('@C657631')

Scenario('Verify that alert is displayed when user click anywhere on the menu with unsaved changes in "Add New Location', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsAddNewLocationPage.navigateToAddNewLocation()
  await locationsPage.locationsButtonClick()
  await I.checkTextInPopUp('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.')
}).tag('@dashboard').tag('@LocationsTests').tag('@C668618')
