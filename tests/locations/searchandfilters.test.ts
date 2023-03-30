import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import assert = require('assert')
import { locationsSearchAndFiltersPage } from '../../pages/location/searchandfilters.page'
import * as location from '../../lib/data/location.json'
import { locationsEditLocationPage } from '../../pages/location/locations.editlocation.page'
const locationName = location.search_location.locationName.location
const locationAddress = location.search_location.locationName.addressName
const locationState = location.search_location.locationName.state
const locationPostalCode = location.search_location.locationName.zipCode
Feature('Search and filters Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('If location name exists in locations list then it returns search results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsSearchAndFiltersPage.validateSearchedLocationOnScreen(locationName)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607780')

Scenario('If location name not in locations list then it returns no results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName('Invalid Name')
  await basePage.waitForProgressBar()
  await I.see('No results')
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607785')

Scenario('If address exists in locations list then it returns search results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByAddress(locationAddress)
  await locationsSearchAndFiltersPage.validateSearchedLocationOnScreen(locationAddress)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607781')

Scenario('If address not in locations list then it returns no results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByAddress('Invalid Location')
  await basePage.waitForProgressBar()
  await I.see('No results')
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607786')

Scenario('If state exists in locations list then it returns search results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByState(locationState)
  const numberOfLocations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  assert(numberOfLocations)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607782')

Scenario('If state not in locations list then it returns no results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await I.waitForElement(locationsPage.locationNameField, basePage.timeoutSec)
  await I.fillField(locationsPage.stateField, 'Bitola')
  await I.dontSeeElement(locationsSearchAndFiltersPage.stateSuggestions)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607787')

Scenario('If zip exists in locations list then it returns search results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByZipCode(locationPostalCode)
  await basePage.waitForProgressBar()
  const numberOfLocations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  assert(numberOfLocations)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607783')

Scenario('If zip not in locations list then it returns no results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByZipCode('7000')
  await basePage.waitForProgressBar()
  await I.see('No results')
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607788')

Scenario('Clear search clears all search fields', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByZipCode(locationPostalCode)
  await basePage.waitForProgressBar()
  await locationsPage.clickOnClearSearchButton()
  const postalCodeFieldValueAfterClear = await I.grabValueFrom(locationsPage.postalCodeField)
  
  assert(postalCodeFieldValueAfterClear === '')
  
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607784')

Scenario('Coming soon checked returns coming soon locations', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchComingSoonLocations()
  await basePage.waitForProgressBar()
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await I.waitForElement(locationsEditLocationPage.comingSoonCheckbox, basePage.timeoutSec)
  const commingSoon = await I.grabAttributeFrom(locationsEditLocationPage.comingSoonCheckbox, 'ng-reflect-model')

  assert(commingSoon)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607789')

Scenario('Under repair checked returns under repair locations', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchUnderRepairLocations()
  await basePage.waitForProgressBar()
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await I.waitForElement(locationsEditLocationPage.underRepairCheckbox, basePage.timeoutSec)
  const underRepair = await I.grabAttributeFrom(locationsEditLocationPage.underRepairCheckbox, 'ng-reflect-model')

  assert(underRepair)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607790')

Scenario('Has active broadcast checked returns active broadcast locations', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationsWithActiveBroadcast()
  await basePage.waitForProgressBar()
  await I.seeElement(locationsPage.activeBroadcastButton)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607791')

Scenario('Sort by location date created', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.sortByDateCreatedDescending()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607792')

Scenario('Sort by location score', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.changeItemsPerPageTopDropDown(100)
  await locationsSearchAndFiltersPage.sortByScoreAllPages()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607793')

Scenario('Sort by location name', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.sortByName()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607794')

Scenario('Sort by direction of results ascending', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.sortAscendingByDateCreated()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607795')

Scenario('Sort by direction of results descending', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.sortByDateCreatedDescending()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607796')

Scenario('Checkmarking a location redirects to the multiple broadcast page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstCheckobxButton()
  await locationsPage.verifyMultipleBroadcastPage()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607797')

Scenario('Checkmarking all locations redirects to the multiple broadcast page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.selectAllLocations()
  await locationsPage.verifyMultipleBroadcastPage()
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607798')