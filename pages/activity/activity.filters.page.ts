import { basePage, BasePage } from '../base.page'
import { locationsActivityPage } from '../location/locations.activity.page'
import { locationsPage } from '../location/locations.page'
import assert = require('assert')
const { I } = inject()

export class ActivityFiltersPage extends BasePage {
  // locators
 

  // methods

  async filterOnlyPositiveReviews () {
    await basePage.selectCheckbox(locationsActivityPage.positiveReviewsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.negativeReviewsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.commentsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    await locationsActivityPage.clickOnApplyFiltersButton()
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i=0; i < numberOfLOcations - 1; i++){
      const positiveReviewText = await I.grabTextFrom(`#activity-rating-${i}`)


      assert(positiveReviewText === 'Successfully charged')
    } 
  }

  async filterOnlyNegativeReviews () {
    await basePage.unSelectCheckbox(locationsActivityPage.positiveReviewsCheckbox)
    await basePage.selectCheckbox(locationsActivityPage.negativeReviewsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.commentsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    await locationsActivityPage.clickOnApplyFiltersButton()
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i=0; i < numberOfLOcations - 1; i++){
      const positiveReviewText = await I.grabTextFrom(`#activity-rating-${i}`)


      assert(positiveReviewText === 'Could not charge')
    } 
  }

  async filterOnlyComments () {
    await basePage.unSelectCheckbox(locationsActivityPage.positiveReviewsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.negativeReviewsCheckbox)
    await basePage.selectCheckbox(locationsActivityPage.commentsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    await locationsActivityPage.clickOnApplyFiltersButton()
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i=0; i < numberOfLOcations - 1; i++){
      const positiveReviewText = await I.grabTextFrom(`#activity-rating-${i}`)


      assert(positiveReviewText === 'Comment')
    } 
  }

  async filterOnlyPhotos () {
    await basePage.unSelectCheckbox(locationsActivityPage.positiveReviewsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.negativeReviewsCheckbox)
    await basePage.unSelectCheckbox(locationsActivityPage.commentsCheckbox)
    await basePage.selectCheckbox(locationsActivityPage.photosCheckbox)
    await locationsActivityPage.clickOnApplyFiltersButton()
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i=0; i < numberOfLOcations - 1; i++){
      const positiveReviewText = await I.grabTextFrom(`#activity-rating-${i}`)


      assert(positiveReviewText === 'Added Photo')
    }
  }

  async validateAddressFieldsActivityPage () {
    await I.waitForElement(locationsPage.locationContainer, this.timeoutSec)
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    const numberOfAddresses = await I.grabNumberOfVisibleElements(locationsActivityPage.addressFields)
    assert(numberOfLOcations === numberOfAddresses)
    }

  async validateUsernameFieldsActivityPage () {
    await I.waitForElement(locationsPage.locationContainer, this.timeoutSec)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    const numberOfUsernames = await I.grabNumberOfVisibleElements(locationsActivityPage.usernameFields)
    assert(numberOfUsernames)
  }

  async validateCommentsFieldsActivityPage () {
    await I.waitForElement(locationsPage.locationContainer, this.timeoutSec)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    const numberOfComments = await I.grabNumberOfVisibleElements(locationsActivityPage.commentsOnActivityPage)
    assert(numberOfComments)
  }

  async validateDateAndTimeFieldsActivityPage () {
    await I.waitForElement(locationsPage.locationContainer, this.timeoutSec)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    const numberOfDates = await I.grabNumberOfVisibleElements(locationsActivityPage.activityDateAndTime)
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    assert(numberOfDates === numberOfLOcations)
  }

  async validateTimeFieldsActivityPage () {
    await I.waitForElement(locationsPage.locationContainer, this.timeoutSec)
    await basePage.unSelectCheckbox(locationsActivityPage.photosCheckbox)
    const numberOfTimes = await I.grabNumberOfVisibleElements(locationsActivityPage.activityDateAndTime)
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    assert(numberOfTimes === numberOfLOcations)
  }
}

export const activityFiltersPage = new ActivityFiltersPage()
