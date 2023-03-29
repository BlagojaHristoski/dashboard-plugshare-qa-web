const email = process.env.DASHBOARD_EMAIL || 'email_missing'
const password = process.env.DASHBOARD_PASSWORD || 'password_missing'
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

  // methods
  async navigateToDashboard () {
    await I.amOnPage('/')
  }

  async navigateToLocations () {
    await I.amOnPage('/locations')
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
}

export const basePage = new BasePage()
