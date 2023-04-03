import { basePage, BasePage } from '../base.page'
const { I } = inject()

export class ActivitySettingsPage extends BasePage {
  // locators
  get accountName () { return '#account-name' }
  get accountSupportEmailField () { return '#account-support-email' }
  get individualUsernameField () { return '#user-name' }
  get individualEmailField () { return '#user-email' }
  get negativeReviewsToggleAllCheckbox () { return '#negative-review-all-toggle' }
  get negativeReviewProblemBrokenCheckbox () { return '#negative-review-problem-broken-toggle' }
  get negativeReviewProblemActivationCheckbox () { return '#negative-review-problem-activation-toggle' }
  get negativeReviewProblemClosedCheckbox () { return '#negative-review-problem-closed-toggle' }
  get positiveReviewCheckbox () { return '#positive-review-toggle' }
  get commentCheckbox () { return '#comment-toggle' }
  get photoCheckbox () { return '#photo-toggle' }
  get editSubmitedCheckbox () { return '#edit-toggle' }
  get settingsSubmitButton () { return '#settings-submit-button' }
  // methods
  async selectAllEmailNotifications () {
    await I.waitForElement(this.negativeReviewsToggleAllCheckbox, this.timeoutSec)
    await basePage.selectCheckbox(this.negativeReviewsToggleAllCheckbox)
    await basePage.selectCheckbox(this.positiveReviewCheckbox)
    await basePage.selectCheckbox(this.commentCheckbox)
    await basePage.selectCheckbox(this.photoCheckbox)
    await basePage.selectCheckbox(this.editSubmitedCheckbox)
    await I.click(this.settingsSubmitButton)
    await basePage.waitForProgressBar()
    await I.see('Settings successfully saved')
  }

  async validateSelectedEmailNotifications () {
    await basePage.validateSelectedCheckbox(this.negativeReviewsToggleAllCheckbox)
    await basePage.validateSelectedCheckbox(this.positiveReviewCheckbox)
    await basePage.validateSelectedCheckbox(this.commentCheckbox)
    await basePage.validateSelectedCheckbox(this.photoCheckbox)
    await basePage.validateSelectedCheckbox(this.editSubmitedCheckbox)
  }

  async editUsername (newUsername) {
    await I.waitForElement(this.individualUsernameField, this.timeoutSec)
    await I.fillField(this.individualUsernameField, newUsername)
    await basePage.waitForProgressBar()
    await I.click(this.settingsSubmitButton)
  }

  async validateOrganizationSettingsSection () {
    await I.waitForElement(this.accountName, basePage.timeoutSec)
    await I.seeElement(this.accountSupportEmailField)
    await I.seeElement(this.individualUsernameField)
    await I.seeElement(this.individualEmailField)
    await I.seeElement(this.negativeReviewsToggleAllCheckbox)
    await I.seeElement(this.negativeReviewProblemBrokenCheckbox)
    await I.seeElement(this.negativeReviewProblemActivationCheckbox)
    await I.seeElement(this.negativeReviewProblemClosedCheckbox)
    await I.seeElement(this.positiveReviewCheckbox)
    await I.seeElement(this.commentCheckbox)
    await I.seeElement(this.photoCheckbox)
    await I.seeElement(this.editSubmitedCheckbox)
    await I.seeElement(this.settingsSubmitButton)
  }
}
export const activitySettingsPage = new ActivitySettingsPage()
