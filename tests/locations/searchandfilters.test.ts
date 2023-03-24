import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import assert = require('assert')
import { locationsSearchAndFiltersPage } from '../../pages/location/searchandfilters.page'
import * as location from '../../lib/data/location.json'
const locationName = location.search_location.locationName.location
Feature('Search and filters Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('If location name exists in locations list then it returns search results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocation(locationName)
}).tag('@dashboard').tag('@SearchAndFiltersTests').tag('@C607780')