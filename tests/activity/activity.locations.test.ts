import { activityFiltersPage } from '../../pages/activity/activity.filters.page'
import { basePage } from '../../pages/base.page'
import { locationsActivityPage } from '../../pages/location/locations.activity.page'

Feature('Activity Locations Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('Address displays underneath name', async ({ I }) => {
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await activityFiltersPage.validateAddressFieldsActivityPage()
}).tag('@dashboard').tag('@ActivityLocationsTests').tag('@C608075')

Scenario('Details of check in displays username', async ({ I }) => {
    await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
    await basePage.navigateToActivity()
    await activityFiltersPage.validateUsernameFieldsActivityPage()
 }).tag('@dashboard').tag('@ActivityLocationsTests').tag('@C608076')

 Scenario('Details of check in displays comment', async ({ I }) => {
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await activityFiltersPage.filterOnlyComments()
   await activityFiltersPage.validateUsernameFieldsActivityPage()
}).tag('@dashboard').tag('@ActivityLocationsTests').tag('@C608077')

Scenario('Details of check in displays date', async ({ I }) => {
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await activityFiltersPage.validateDateAndTimeFieldsActivityPage()
}).tag('@dashboard').tag('@ActivityLocationsTests').tag('@C608078')

Scenario('Details of check in displays time', async ({ I }) => {
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await activityFiltersPage.validateDateAndTimeFieldsActivityPage()
}).tag('@dashboard').tag('@ActivityLocationsTests').tag('@C608078')

Scenario('Link to respond to message allows user to submit a comment', async ({ I }) => {
   const privatelyMessage = 'Message from QA team'
 
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await locationsActivityPage.sendPrivatelyMessageToUser(true, privatelyMessage)
   await basePage.waitForProgressBar()
   await I.waitForText('Message sent', basePage.timeoutSec)
 }).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C608080')

 Scenario('Link to respond to message allows user to cancel the pending comment', async ({ I }) => {
   const privatelyMessage = 'Message from QA team'
 
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await locationsActivityPage.sendPrivatelyMessageToUser(false, privatelyMessage)
   await I.dontSeeElement(locationsActivityPage.sendMessagePopUpField)
 }).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C608081')
 
 Scenario('Verify that user is able to Edit Response', async ({ I }) => {
   const messageForPubliclyResponse = 'QA Team Response Message'
   const editMessageForPubliclyResponse = 'QA Team Response Message - Edited'
 
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await locationsActivityPage.deletePreviousResponseIfExists()
   await locationsActivityPage.addPubliclyRespond(true, messageForPubliclyResponse)
   await basePage.waitForProgressBar()
   await I.waitForText('Your response has been posted and the user has been notified', basePage.timeoutSec)
   await locationsActivityPage.editResponse(editMessageForPubliclyResponse)
   await I.waitForText('Your response has been updated', basePage.timeoutSec)
 }).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C609506')

 Scenario('Verify that user is able to Delete Response', async ({ I }) => {
   const messageForPubliclyResponse = 'QA Team Response Message'
 
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await locationsActivityPage.deletePreviousResponseIfExists()
   await locationsActivityPage.addPubliclyRespond(true, messageForPubliclyResponse)
   await basePage.waitForProgressBar()
   await I.waitForText('Your response has been posted and the user has been notified', basePage.timeoutSec)
   await locationsActivityPage.deleteResponse()
 }).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C609505')

 Scenario('Report a problem button allows user to submit a problem', async ({ I }) => {
   const problem = 'Report Activity from QA team'
 
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await locationsActivityPage.reportProblem(true, problem)
   await basePage.waitForProgressBar()
   await I.see('Activity successfully reported')
 }).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C608084')
 
 Scenario('Report a problem button allows user to cancel pending problem', async ({ I }) => {
   const problem = 'Report Activity from QA team'
 
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await locationsActivityPage.reportProblem(false, problem)
   await I.dontSeeElement(locationsActivityPage.reportActivityField)
 }).tag('@dashboard').tag('@LocationsEntriesTests').tag('@C608085')
