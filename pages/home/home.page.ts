import { BasePage } from '../base.page'
const { I } = inject()

export class HomePage extends BasePage {
  // locators
  get logoutButton () { return '#logout-button' }
  get styleGuideButton () { return '#style-guide-link' }

  // methods
  async signOutDashboard () {
    await I.waitForElement(this.logoutButton, this.timeoutSec)
    await I.click(this.logoutButton)
    await I.waitForElement(this.loginField, this.timeoutSec)
  }

  async styleGuideButtonClick () {
    await I.waitForElement(this.styleGuideButton, this.timeoutSec)
    await I.click(this.styleGuideButton)
  }
}

export const homePage = new HomePage()
