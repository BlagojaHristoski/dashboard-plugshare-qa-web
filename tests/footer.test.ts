import { basePage } from '../pages/base.page'

Feature('Footer Tests')
Before(async () => {
  await basePage.navigateToDashboard()
  await basePage.signInDashboard()
})

Scenario('Verify that user is able to change background', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await basePage.changeBackground()
}).tag('@dashboard').tag('@FooterTests').tag('@C609642')

Scenario('Verify that user is navigated to PlugShare Company page on click on "© 2022 Recargo, Inc."', async ({ I }) => {
  await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  await basePage.copyrightButtonClick()
  await I.switchToNextTab()
  await I.seeInCurrentUrl('https://company.plugshare.com/')
}).tag('@dashboard').tag('@FooterTests').tag('@C609638')

Scenario('Verify that user is navigated to PlugShare Privacy Policy page on click on " Privacy Policy"', async ({ I }) => {
    await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
    await basePage.privacyButtonClick()
    await I.switchToNextTab()
    await I.seeInCurrentUrl('https://company.plugshare.com/privacy.html')
  }).tag('@dashboard').tag('@FooterTests').tag('@C609639')

Scenario('Verify that user is navigated to PlugShare Terms of Use page on click on " Terms of Use"', async ({ I }) => {
    await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
    await basePage.termsOfUseButtonClick()
    await I.switchToNextTab()
    await I.seeInCurrentUrl('https://company.plugshare.com/terms.html')
  }).tag('@dashboard').tag('@FooterTests').tag('@C609640')