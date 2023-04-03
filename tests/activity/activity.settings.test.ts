import { basePage } from '../../pages/base.page'
import { locationsPage } from '../../pages/location/locations.page'
import { activitySettingsPage } from '../../pages/activity/activity.settings.page'
import assert = require('assert')

Feature('Activity Settings Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('Set email notifications', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToSettings()
  await activitySettingsPage.selectAllEmailNotifications()
  await activitySettingsPage.validateSelectedEmailNotifications()
}).tag('@dashboard').tag('@ActivitySettingsTests').tag('@C608087')

Scenario('Edit user\'s name', async ({ I }) => {
  const randomNumber = await I.generateRandomNumber(100000, 999999)
  const newUsername = `blagoja.hristoski1994 ${randomNumber}`
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToSettings()
  await activitySettingsPage.editUsername(newUsername)
  await I.see('Settings successfully saved')
 }).tag('@dashboard').tag('@ActivitySettingsTests').tag('@C608088')

 Scenario('Unable to edit email address', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToSettings()
  const disabled = await I.grabAttributeFrom(activitySettingsPage.individualEmailField, 'disabled')
  assert(disabled)
}).tag('@dashboard').tag('@ActivitySettingsTests').tag('@C608089')

Scenario('Users organization is displayed', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await locationsPage.navigateToSettings()
  await activitySettingsPage.validateOrganizationSettingsSection()
}).tag('@dashboard').tag('@ActivitySettingsTests').tag('@C608090')
