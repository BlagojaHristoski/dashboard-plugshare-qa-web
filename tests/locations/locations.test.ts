import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import { locationsAddNewLocationPage } from '../../pages/location/locations.addnewlocation.page'
import assert = require('assert')

Feature('Locations Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

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

