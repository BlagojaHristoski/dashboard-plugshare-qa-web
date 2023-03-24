import { BasePage, basePage } from '../base.page'
import assert = require('assert')
const { I } = inject()

export class LocationsActivityPage extends BasePage {
  // locators
  get activityTitle () { return '//h2' }
  get positiveReviewsCheckbox () { return '#positive-reviews-checkbox' }
  get negativeReviewsCheckbox () { return '#negative-reviews-checkbox' }
  get commentsCheckbox () { return '#comments-checkbox' }
  get photosCheckbox () { return '#photos-checkbox' }
  get applyFiltersButton () { return '#apply-filters-button' }
  get activityContainer () { return '#activities-table' }
  get firstPrivatelyMessageUserButton () { return '#activity-privately-message-user-button-0' }
  get firstReportProblemButton () { return '#activity-report-problem-button-0' }
  get firstLocationAddressButton () { return '#activity-address-0' }
  get firstPubliclyRespondButton () { return '#activity-respond-button-0' }
  get publiclyResponseTextarea () { return '//textarea[@name="response"]' }
  get publiclyResponseSubmitButton () { return '//div[contains(@id, "activity-response-submit-button")]' }
  get publiclyResponseCancelButton () { return '//div[contains(@id, "activity-response-cancel-button")]' }
  get responseByQaMessage () { return '#activity-response-message-0' }
  get deleteResponseButton () { return '//div[contains(@id, "activity-delete-response-button")]' }
  get editResponseButton () { return '//div[contains(@id, "activity-edit-response-button")]' }
  get updateResponseButton () { return '//div[contains(@id, "activity-response-update-button")]' }
  get sendMessagePopUpTitle () { return '//h1[text()="Send Message"]' }
  get sendMessagePopUpField () { return '//textarea[@id="message-contents"]' }
  get reportActivityField () { return '#report-contents' }
  get cancelButtonSendMessagePopUp () { return '#cancel-message-button' }
  get submitButtonSendMessagePopUp () { return '#submit-message-button' }
  get cancelButtonReportActivityPopUp () { return '#report-cancel-button' }
  get submitButtonReportActivityPopUp () { return '#report-submit-button' }

  // Methods
  async clickOnfirstLocationAddressButton () {
    await I.waitForElement(this.firstLocationAddressButton, this.timeoutSec)
    await I.click(this.firstLocationAddressButton)
  }

  async clickOnFirstPubliclyRespondButton () {
    await I.waitForElement(this.firstPubliclyRespondButton, this.timeoutSec)
    await I.click(this.firstPubliclyRespondButton)
  }

  async clickOnFirstPrivatelyMessageUserButton () {
    await I.waitForElement(this.firstPrivatelyMessageUserButton, this.timeoutSec)
    await I.click(this.firstPrivatelyMessageUserButton)
  }

  async validateActivityPage () {
    await basePage.waitForProgressBar()
    await I.waitForElement(this.activityTitle, basePage.timeoutSec)
    await I.seeElement(this.activityContainer)
    await I.seeElement(this.positiveReviewsCheckbox)
    await I.seeElement(this.negativeReviewsCheckbox)
    await I.seeElement(this.commentsCheckbox)
    await I.seeElement(this.photosCheckbox)
    await I.seeElement(this.applyFiltersButton)
    await I.seeElement(this.firstPrivatelyMessageUserButton)
    await I.seeElement(this.firstReportProblemButton)
    const activityPageTitle = await I.grabTextFrom(locationsActivityPage.activityTitle)

    assert(activityPageTitle === 'ACTIVITY')
  }

  async validateSendMessagePopUp () {
    await I.waitForElement(this.sendMessagePopUpField, basePage.timeoutSec)
    await I.seeElement(this.sendMessagePopUpTitle)
    await I.seeElement(this.cancelButtonSendMessagePopUp)
    await I.seeElement(this.submitButtonSendMessagePopUp)
  }

  async deletePreviousResponseIfExists () {
    await I.waitForElement(this.firstReportProblemButton, basePage.timeoutSec)
    const response = await I.grabNumberOfVisibleElements(this.deleteResponseButton)

    if (response) {
      await this.deleteResponse()
    }
  }

  async deleteResponse () {
    await I.waitForElement(this.deleteResponseButton, this.timeoutSec)
    await I.click(this.deleteResponseButton)
    await I.acceptPopup()
    await I.see('This response has been deleted')
  }

  async addPubliclyRespond (submit: boolean, text: string) {
    await I.waitForElement(this.firstPubliclyRespondButton, this.timeoutSec)
    await I.click(this.firstPubliclyRespondButton)
    await I.fillField(this.publiclyResponseTextarea, text)
    if (submit) {
      await I.waitForElement(this.publiclyResponseSubmitButton, this.timeoutSec)
      await I.click(this.publiclyResponseSubmitButton)
    } else {
      await I.waitForElement(this.publiclyResponseCancelButton, this.timeoutSec)
      await I.click(this.publiclyResponseCancelButton)
    }
  }

  async sendPrivatelyMessageToUser (submit, message) {
    await I.waitForElement(this.firstPrivatelyMessageUserButton, this.timeoutSec)
    await I.click(this.firstPrivatelyMessageUserButton)
    await I.fillField(this.sendMessagePopUpField, message)
    if (submit) {
      await I.waitForElement(this.submitButtonSendMessagePopUp, this.timeoutSec)
      await I.click(this.submitButtonSendMessagePopUp)
    } else {
      await I.waitForElement(this.cancelButtonSendMessagePopUp, this.timeoutSec)
      await I.click(this.cancelButtonSendMessagePopUp)
    }
  }

  async reportProblem (submit, problemMessage) {
    await I.waitForElement(this.firstReportProblemButton, this.timeoutSec)
    await I.click(this.firstReportProblemButton)
    await I.fillField(this.reportActivityField, problemMessage)
    if (submit) {
      await I.waitForElement(this.submitButtonReportActivityPopUp, this.timeoutSec)
      await I.click(this.submitButtonReportActivityPopUp)
    } else {
      await I.waitForElement(this.cancelButtonReportActivityPopUp, this.timeoutSec)
      await I.click(this.cancelButtonReportActivityPopUp)
    }
  }

  async editResponse (editText) {
    await I.waitForElement(this.editResponseButton, this.timeoutSec)
    await I.click(this.editResponseButton)
    await I.fillField(this.publiclyResponseTextarea, editText)
    await I.click(this.updateResponseButton)
  }
}

export const locationsActivityPage = new LocationsActivityPage()
