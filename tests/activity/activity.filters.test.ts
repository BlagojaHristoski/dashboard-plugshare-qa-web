import { activityFiltersPage } from '../../pages/activity/activity.filters.page'
import { basePage } from '../../pages/base.page'

Feature('Activity Filters Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('Filtering by positive reviews returns search results', async ({ I }) => {
   await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
   await basePage.navigateToActivity()
   await activityFiltersPage.filterOnlyPositiveReviews()
}).tag('@dashboard').tag('@ActivityFiltersTests').tag('@C607817')

Scenario('Filtering by negative reviews returns search results', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await basePage.navigateToActivity()
  await activityFiltersPage.filterOnlyNegativeReviews()
}).tag('@dashboard').tag('@ActivityFiltersTests').tag('@C607818')

Scenario('Filtering by comments returns search results', async ({ I }) => {
    await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
    await basePage.navigateToActivity()
    await activityFiltersPage.filterOnlyComments()
  }).tag('@dashboard').tag('@ActivityFiltersTests').tag('@C607819')

  Scenario('Filtering by photos returns search results', async ({ I }) => {
    await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
    await basePage.navigateToActivity()
    await activityFiltersPage.filterOnlyComments()
  }).tag('@dashboard').tag('@ActivityFiltersTests').tag('@C607820')