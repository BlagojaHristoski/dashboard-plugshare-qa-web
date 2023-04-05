import { basePage } from '../../pages/base.page'
import { homePage } from '../../pages/home/home.page'

Feature('Home Tests')

Before(async () => {
  await basePage.navigateToDashboard()
})

Scenario('Verify that user is able to Sign into PlugShare Dashboard', async ({ I }) => {
  await basePage.signInDashboard()
  await I.waitForElement(homePage.logoutButton, basePage.timeoutSec)
}).tag('@dashboard').tag('@HomeTests').tag('@C612972')

Scenario('Verify that user is able to Logout from PlugShare Dashboard', async ({ I }) => {
  await basePage.signInDashboard()
  await homePage.signOutDashboard()
  await I.seeElement(basePage.loginField)
}).tag('@dashboard').tag('@HomeTests').tag('@C607679')

Scenario('Verify that user is correctly navigated to Style guide page', async ({ I }) => {
  await basePage.signInDashboard()
  await homePage.styleGuideButtonClick()
  await I.switchToNextTab(2)
  await I.waitInUrl('dashboard-staging.plugshare.com/assets/data_entry_style_guide_for_plugshare_dashboard', 10)
}).tag('@dashboard').tag('@HomeTests').tag('@C607680')
