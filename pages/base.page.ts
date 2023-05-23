import { assert } from "console"

const email = process.env.DASHBOARD_EMAIL || 'email_missing'
const password = process.env.DASHBOARD_PASSWORD || 'password_missing'
const URL = process.env.BASE_URL
const { I } = inject()

export class BasePage {
  // locators
  get timeoutSec () { return Number(process.env.TIMEOUT) || 30 }
  get loginField () { return '#login-email' }
  get passwordField () { return '#login-password' }
  get loginButton () { return '#login-button' }
  get logoutButton () { return '#logout-button' }
  get progressBar () { return '//mat-progress-bar' }
  get mapButtonGoogleMaps () { return '//button[text()="Map"]' }
  get satelliteButtonGoogleMaps () { return '//button[text()="Satellite"]' }
  get fullScreenButtonGoogleMaps () { return '//button[@title="Toggle fullscreen view"]' }
  get terrainMapType () { return '//*[@aria-label="Terrain"]' }
  get labelsOnSatelliteTypeButton () { return '//*[@aria-label="Labels"]' }
  get changeBackgroundButton () { return '#change-background' }
  get copyrightButton () { return '#copyright-link' }
  get privacyButton () { return '#privacy-link' }
  get termsOfUseButton () { return '#terms-of-use-link' }

  // methods
  async navigateToDashboard () {
    await I.amOnPage(`${URL}/`)
  }

  async navigateToLocations () {
    await I.amOnPage(`${URL}/locations`)
  }

  async navigateToActivity () {
    await I.amOnPage(`${URL}//activities`)
  }

  async navigateToSettings () {
    await I.amOnPage(`${URL}//settings`)
  }

  async getText (text) {
    return `//a[text()="${text}"]`
  }

  async signInDashboard () {
    await I.waitForElement(this.loginField, this.timeoutSec)
    await I.fillField(this.loginField, email)
    await I.fillField(this.passwordField, password)
    await I.click(this.loginButton)
  }

  async validateLoginUser () {
    await I.waitForElement(basePage.logoutButton, basePage.timeoutSec)
  }

  async waitForProgressBar () {
    await I.waitForInvisible(this.progressBar, this.timeoutSec)
  }

  async selectCheckbox (checkbox) {
        const elementVisible = await I.grabAttributeFrom(checkbox, 'ng-reflect-model')

        if (elementVisible === 'false') {
          await I.waitForElement(checkbox, this.timeoutSec)
          await I.click(checkbox)
       }
  }

  async unSelectCheckbox (checkbox) {
    const elementVisible = await I.grabAttributeFrom(checkbox, 'ng-reflect-model')

    if (elementVisible === 'true') {
      await I.waitForElement(checkbox, this.timeoutSec)
      await I.click(checkbox)
   }
  }

  async validateSelectedCheckbox (checkbox) {
    const elementVisible = await I.grabAttributeFrom(checkbox, 'ng-reflect-model')
    assert(elementVisible === 'true')
  }

  async validateUnselectedCheckbox (checkbox) {
    const elementVisible = await I.grabAttributeFrom(checkbox, 'ng-reflect-model')
    assert(elementVisible === 'false')
  }

  async changeBackground () {
    await I.waitForElement(this.changeBackgroundButton, this.timeoutSec)
    await I.click(this.changeBackgroundButton)
    await I.see('Background Changed')
  }

  async copyrightButtonClick () {
    await I.waitForElement(this.copyrightButton, this.timeoutSec)
    await I.click(this.copyrightButton)
  }

  async privacyButtonClick () {
    await I.waitForElement(this.privacyButton, this.timeoutSec)
    await I.click(this.privacyButton)
  }

  async termsOfUseButtonClick () {
    await I.waitForElement(this.termsOfUseButton, this.timeoutSec)
    await I.click(this.termsOfUseButton)
  }
}

export const basePage = new BasePage()
