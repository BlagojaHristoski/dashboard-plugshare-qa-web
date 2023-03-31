import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import assert = require('assert')
import { locationsHistoryPage } from '../../pages/location/locations.history.pages'
import { locationsActivityPage } from '../../pages/location/locations.activity.page'
import { locationsEditLocationPage } from '../../pages/location/locations.editlocation.page'
import { locationsSearchAndFiltersPage } from '../../pages/location/searchandfilters.page'
import * as location from '../../lib/data/location.json'
const locationName = location.edit_location.location.locationName

Feature('Locations Entries Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('Address displays underneath name', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  const locationAddresses = await I.grabNumberOfVisibleElements(locationsPage.firstLocationAddress)

  assert(numberOfLOcations === locationAddresses)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C607683')

Scenario('Date created is populated', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)

  const locationDataCreatedFields = await I.grabNumberOfVisibleElements(locationsPage.dateCreatedField)

  assert(numberOfLOcations === locationDataCreatedFields)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C607769')

Scenario('History button redirects to check in history page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.firstEnabledHistoryButtonClick()
  await I.switchToNextTab()
  await I.waitForElement(locationsHistoryPage.checkInHistoryTitle, basePage.timeoutSec)
  const historyPageTitle = await I.grabTextFrom(locationsHistoryPage.checkInHistoryTitle)

  assert(historyPageTitle === ' Check-in History ')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C607772')

Scenario('Reviews button redirects to reviews page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewButton()
  await locationsActivityPage.validateActivityPage()
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C607773')

Scenario('Reviews button is inactive if no reviews are posted', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.validateDisabledReviewsButton()
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C607779')

Scenario('Broadcast button displays broadcast overlay', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstBroadcastButton()
  await locationsPage.validateBroadcastDialog()
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610404')

Scenario('Edit button redirects to Edit location page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await locationsEditLocationPage.validateEditLocationPage()
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C607775')

Scenario('Location address links to google maps', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.firstEnabledHistoryButtonClick()
  await I.switchToNextTab()
  await locationsEditLocationPage.googleLocationButtonClick()
  await I.switchToNextTab()
  await I.seeInCurrentUrl('www.google.com/maps/search')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C609644')

Scenario('Reviews button navigates to Activity page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.validateActivityPage()
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C609645')

Scenario('Edit button navigates to Location Edit page', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.firstEnabledHistoryButtonClick()
  await I.switchToNextTab()
  await locationsPage.clickOneditButtonOnLocationDetailsScreen()
  await locationsEditLocationPage.validateEditLocationPage()
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C609646')

Scenario('Location address links to google maps', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.clickOnfirstLocationAddressButton()
  await I.switchToNextTab()
  await I.seeInCurrentUrl('www.google.com/maps/search')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610019')

Scenario('Link to respond to message allows user to submit a comment', async ({ I }) => {
  const messageForPubliclyResponse = 'QA Team Response Message'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.deletePreviousResponseIfExists()
  await locationsActivityPage.addPubliclyRespond(true, messageForPubliclyResponse)
  await I.see('Your response has been posted and the user has been notified')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610021')

Scenario('Link to respond to message allows user to cancel the pending comment', async ({ I }) => {
  const messageForPubliclyResponse = 'QA Team Response Message'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.deletePreviousResponseIfExists()
  await locationsActivityPage.addPubliclyRespond(false, messageForPubliclyResponse)
  await I.dontSeeElement(locationsActivityPage.publiclyResponseTextarea)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610022')

Scenario('Verify that user is able to Edit Response', async ({ I }) => {
  const messageForPubliclyResponse = 'QA Team Response Message'
  const editMessage = 'Edit Response Message'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.deletePreviousResponseIfExists()
  await locationsActivityPage.addPubliclyRespond(true, messageForPubliclyResponse)
  await locationsActivityPage.editResponse(editMessage)
  await I.see('Your response has been updated')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610023')

Scenario('Verify that user is able to Delete Response', async ({ I }) => {
  const messageForPubliclyResponse = 'QA Team Response Message'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.deletePreviousResponseIfExists()
  await locationsActivityPage.addPubliclyRespond(true, messageForPubliclyResponse)
  await locationsActivityPage.deleteResponse()
  await I.see('This response has been deleted')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610024')

Scenario('Privately message user button allows user to submit a message', async ({ I }) => {
  const privatelyMessage = 'Message from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.sendPrivatelyMessageToUser(true, privatelyMessage)
  await basePage.waitForProgressBar()
  await I.see('Message sent')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610025')

Scenario('Privately message user button allows user to cancel pending message', async ({ I }) => {
  const privatelyMessage = 'Message from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.sendPrivatelyMessageToUser(false, privatelyMessage)
  await I.dontSeeElement(locationsActivityPage.sendMessagePopUpField)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610026')

Scenario('Report a problem button allows user to submit a problem', async ({ I }) => {
  const problem = 'Report Activity from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.reportProblem(true, problem)
  await basePage.waitForProgressBar()
  await I.see('Activity successfully reported')
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610027')

Scenario('Report a problem button allows user to cancel pending problem', async ({ I }) => {
  const problem = 'Report Activity from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.clickOnFirstReviewsButton()
  await basePage.waitForProgressBar()
  await locationsActivityPage.reportProblem(false, problem)
  await I.dontSeeElement(locationsActivityPage.reportActivityField)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610028')

Scenario('Verify that user is able to create a broadcast', async ({ I }) => {
  const broadcast = 'New Broadcast from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.deleteActiveBroadcastIfExists()
  await locationsPage.addBroadcast(broadcast)
  await I.waitForElement(locationsPage.activeBroadcastButton, basePage.timeoutSec)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610405')

Scenario('Verify that user is able to "Clear Current Broadcast"', async ({ I }) => {
  const broadcast = 'New Broadcast from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsPage.addBroadcastIfDontExists(broadcast)
  await locationsPage.removeBroadcast()
  await I.dontSeeElement(locationsPage.activeBroadcastButton)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610406')

Scenario('Verify that user is able to report problem from edit location', async ({ I }) => {
  const problem = 'Report Activity from QA team'

  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToLocations()
  await locationsSearchAndFiltersPage.searchLocationByName(locationName)
  await locationsPage.clickOnFirstEditButton()
  await I.switchToNextTab()
  await basePage.waitForProgressBar()
  await locationsEditLocationPage.reportProblemEditPage(problem)
}).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C610008')