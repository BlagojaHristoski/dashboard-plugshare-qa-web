import { BasePage, basePage } from '../base.page'

import assert = require('assert')
const { I } = inject()

export class LocationsPage extends BasePage {
  // locators
  get locationsButton () { return '#nav-locations' }
  get locationsTable () { return '.mat-table.cdk-table.mat-elevation-z8' }
  get locationContainer () { return '.mat-row.cdk-row.ng-star-inserted' }
  get comingSoonCheckbox () { return '#coming-soon-toggle' }
  get underRepairCheckbox () { return '#under-repair-toggle' }
  get hasActiveBroadcastCheckbox () { return '#has-active-broadcast-toggle' }
  get locationNameField () { return '#location-name-input' }
  get addressField () { return '#address-input' }
  get stateField () { return '#region-input' }
  get postalCodeField () { return '#postal-code-input' }
  get searchAndApplyFiltersButton () { return '#search-button' }
  get clearSearchButton () { return '#clear-search-button' }
  get createNewLocationButton () { return '#create-new-location-button' }
  get groupBroadcastButton () { return '#group-broadcast-button' }
  get downloadCSVButton () { return '#download-csv-button' }
  get sortByDropDown () { return '#sort-by-select' }
  get directionDropDown () { return '#direction-select' }
  get sortByNameOption () { return '//*[@value="name"]' }
  get sortByScoreOption () { return '//*[@value="score"]' }
  get sortByDateCreatedOption () { return '//*[@value="created_at"]' }
  get directionDescendingOption () { return '//*[@value="desc"]' }
  get directionAscendingOption () { return '//*[@value="asc"]' }
  get itemsPerPageTopDropDown () { return '//mat-paginator[@id="paginator-top"]//mat-select' }
  get itemsPerPageBottomDropDown () { return '//mat-paginator[@id="paginator-bottom"]//mat-select' }
  get fiveItemsPerPageOption () { return '//span[text()=" 5 "]' }
  get tenItemsPerPageOption () { return '//span[text()=" 10 "]' }
  get twentyFiveItemsPerPageOption () { return '//span[text()=" 25 "]' }
  get hundredItemsPerPageOption () { return '//span[text()=" 100 "]' }
  get nextPageTopButton () { return '//mat-paginator[@id="paginator-top"]//button[@ng-reflect-message="Next page"]' }
  get previousPageTopButton () { return '//mat-paginator[@id="paginator-top"]//button[@class="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-previous mat-icon-button mat-button-base"]' }
  get nextPageBottomButton () { return '//mat-paginator[@id="paginator-bottom"]//button[@class="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-next mat-icon-button mat-button-base"]' }
  get previousPageBottomButton () { return '//mat-paginator[@id="paginator-bottom"]//button[@class="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-previous mat-icon-button mat-button-base"]' }
  get selectAllLocationsCheckBox () { return '#checkall-box' }
  get firstLocationCheckBox () { return '#check-location-box-0' }
  get firstLocationLink () { return '#location-plugshare-link-0' }
  get historyButton () { return '//span[text()="History"]/..' }
  get firstActiveReviewButton () { return '(//button[contains(@id, "location-reviews-button") and @ng-reflect-disabled = "false"])[1]' }
  get firstReviewButton () { return '#location-reviews-button-0' }
  get firstBroadcastButton () { return '#location-broadcast-button-0' }
  get firstEditButton () { return '#location-edit-button-0' }
  get plugshareScore () { return '.score.success.ng-star-inserted' }
  get editLocationTitle () { return '//h2[text()="Edit Location"]' }
  get firstLocationName () { return '(//div[@class="name"])[1]//a' }
  get firstLocationAddress () { return '(//div[@class="address"])//a' }
  get dateCreatedField () { return '//span[contains(@id, "location-dated-created-")]' }
  get firstEnabledHistoryButton () { return '(//span[text()="History"]/..//span[@ng-reflect-disabled="false"])[1]' }
  get firstDisabledHistoryButton () { return '(//span[text()="History"]/..//span[@ng-reflect-disabled="true"])[1]' }
  get stationWithOutReview () { return '//div[text()=" No Reviews "]/../..' }
  get disabledReviewButton () { return '//button[@ng-reflect-disabled="true"]//span[text()="Reviews"]' }
  get broadcastDialog () { return '//app-broadcast/..' }
  get broadcastTitle () { return '//h1[text()[contains(.,"Broadcast")]]' }
  get broadcastMessageInput () { return '#broadcast-message' }
  get broadcastDurationDropdown () { return '#broadcast-duration' }
  get cancelBroadcastButton () { return '#cancel-broadcast-button' }
  get cancelMultipleBroadcastButton () { return '#multi-broadcast-cancel-button' }
  get submitBroadcastButton () { return '#submit-broadcast-button' }
  get editButtonOnLocationDetailsScreen () { return '#location-edit-button' }
  get activeBroadcastButton () { return '//span[@class="broadcast-status active-broadcast ng-star-inserted"]' }
  get clearCurrentBroadcastButton () { return '#clear-broadcast-button' }
  get broadcastToLocationsButton () { return '#multi-broadcast-button' }
  // methods
  async navigateToLocations () {
    await I.amOnPage(`${URL}/locations`)
    await I.waitForElement(locationsPage.searchAndApplyFiltersButton, basePage.timeoutSec)
  }

  async clickOnCreateNewLocation () {
    await I.waitForElement(locationsPage.createNewLocationButton, basePage.timeoutSec)
    await I.click(locationsPage.createNewLocationButton)
  }

  async clickOnFirstReviewButton () {
    await I.waitForElement(locationsPage.firstReviewButton, basePage.timeoutSec)
    await I.click(locationsPage.firstReviewButton)
  }

  async clickOnFirstBroadcastButton () {
    await I.waitForElement(locationsPage.firstBroadcastButton, basePage.timeoutSec)
    await I.click(locationsPage.firstBroadcastButton)
  }

  async clickOnFirstEditButton () {
    await I.waitForElement(locationsPage.firstEditButton, basePage.timeoutSec)
    await I.click(locationsPage.firstEditButton)
  }

  async clickOnFirstReviewsButton () {
    await I.waitForElement(locationsPage.firstActiveReviewButton, basePage.timeoutSec)
    await I.click(this.firstActiveReviewButton)
  }

  async clickOnEditButtonOnLocationDetailsScreen () {
    await I.waitForElement(locationsPage.editButtonOnLocationDetailsScreen, basePage.timeoutSec)
    await I.click(this.editButtonOnLocationDetailsScreen)
  }

  async clickOnClearSearchButton () {
    await I.waitForElement(locationsPage.clearSearchButton, basePage.timeoutSec)
    await I.click(locationsPage.clearSearchButton)
  }

  async clickOnFirstCheckboxButton () {
    await I.waitForElement(this.firstLocationCheckBox, this.timeoutSec)
    await I.click(this.firstLocationCheckBox)
  }

  async clickOnCancelMultipleBroadcastButton () {
    await I.waitForElement(this.cancelMultipleBroadcastButton, this.timeoutSec)
    await I.click(this.cancelMultipleBroadcastButton)
  }

  async clickOnBroadcastToLocationsButton () {
    await I.waitForElement(this.broadcastToLocationsButton, this.timeoutSec)
    await I.click(this.broadcastToLocationsButton)
  }

  async validatePopUpForEmptyField (emptyField) {
    await I.seeInPopup('Please fix the following errors')
    await I.seeInPopup(`${emptyField}: required`)
  }

  async changeItemsPerPageTopDropDown (numberOfItems) {
    numberOfItems = numberOfItems ?? 25
    await I.waitForElement(locationsPage.itemsPerPageTopDropDown, basePage.timeoutSec)
    await I.click(this.itemsPerPageTopDropDown)
    await I.click(`//span[text()=" ${numberOfItems} "]`)
  }

  async firstLocationClick () {
    await I.waitForElement(locationsPage.firstLocationName, basePage.timeoutSec)
    await I.click(this.firstLocationName)
  }

  async firstEnabledHistoryButtonClick () {
    await I.waitForElement(locationsPage.firstEnabledHistoryButton, basePage.timeoutSec)
    await I.click(this.firstEnabledHistoryButton)
  }

  async locationsButtonClick () {
    await I.waitForElement(locationsPage.locationsButton, basePage.timeoutSec)
    await I.click(this.locationsButton)
  }

  async validateDisabledReviewsButton () {
    const numberOfStationsWithOutReview = await I.grabNumberOfVisibleElements(this.stationWithOutReview)
    const numberOfDisabledReviewsButtons = await I.grabNumberOfVisibleElements(this.disabledReviewButton)

    for (let i = 1; i <= numberOfStationsWithOutReview; i++) {
      const disabled = await I.grabAttributeFrom(`(${this.disabledReviewButton}/..)[${i}]`, 'disabled')

      assert(disabled && numberOfStationsWithOutReview === numberOfDisabledReviewsButtons)
    }
  }

  async validateBroadcastDialog () {
    await I.waitForElement(this.broadcastDialog, basePage.timeoutSec)
    await I.seeElement(this.broadcastTitle)
    await I.see('Post an update about your station\'s status on PlugShare')
    await I.seeElement(this.broadcastMessageInput)
    await I.see('This broadcast will appear on your station\'s page on PlugShare')
    await I.seeElement(this.broadcastDurationDropdown)
    await I.see('Your broadcast will be removed after this time period.')
    await I.seeElement(this.cancelBroadcastButton)
    await I.seeElement(this.submitBroadcastButton)
  }

  async deleteActiveBroadcastIfExists () {
    await I.waitForElement(this.historyButton, basePage.timeoutSec)
    const activeBroadcast = await I.grabNumberOfVisibleElements(this.activeBroadcastButton)

    if (activeBroadcast) {
      await I.click(this.activeBroadcastButton)
      await I.click(this.clearCurrentBroadcastButton)
      await basePage.waitForProgressBar()
      await I.waitForInvisible(this.clearCurrentBroadcastButton, basePage.timeoutSec)
    }
  }

  async addBroadcastIfDoNotExists (message, duration?) {
    await I.waitForElement(this.historyButton, basePage.timeoutSec)
    const activeBroadcast = await I.grabNumberOfVisibleElements(this.activeBroadcastButton)

    if (!activeBroadcast) {
      await this.addBroadcast(message, duration)
    }
  }

  async removeBroadcast () {
    await I.click(this.activeBroadcastButton)
    await I.click(this.clearCurrentBroadcastButton)
    await basePage.waitForProgressBar()
    await I.waitForInvisible(this.clearCurrentBroadcastButton, basePage.timeoutSec)
  }

  async getBroadcastDuration (value) {
    return `//div[@id="broadcast-duration-panel"]//mat-option[@value="${value}"]`
  }

  async addBroadcast (message, duration?) {
    await this.clickOnFirstBroadcastButton()
    await I.waitForElement(this.broadcastMessageInput, basePage.timeoutSec)
    await I.fillField(this.broadcastMessageInput, message)
    await I.click(this.broadcastDurationDropdown)
    switch (duration) {
      case `${3} days`: {
        await I.click(await this.getBroadcastDuration(3))
        break
      }
      case `${1} week`: {
        await I.click(await this.getBroadcastDuration(7))
        break
      }
      case `${3} weeks`: {
        await I.click(await this.getBroadcastDuration(21))
        break
      }
      case `${6} months`: {
        await I.click(await this.getBroadcastDuration(180))
        break
      }
      default: {
        await I.click(await this.getBroadcastDuration(1))

        break
      }
    }
    await I.click(this.submitBroadcastButton)
  }

  async addBroadcastForCheckedLocation (message, duration?) {
    await locationsPage.clickOnFirstCheckboxButton()
    await locationsPage.clickOnBroadcastToLocationsButton()
    await I.waitForElement(this.broadcastMessageInput, basePage.timeoutSec)
    await I.fillField(this.broadcastMessageInput, message)
    await I.click(this.broadcastDurationDropdown)
    switch (duration) {
      case `${3} days`: {
        await I.click(await this.getBroadcastDuration(3))
        break
      }
      case `${1} week`: {
        await I.click(await this.getBroadcastDuration(7))
        break
      }
      case `${3} weeks`: {
        await I.click(await this.getBroadcastDuration(21))
        break
      }
      case `${6} months`: {
        await I.click(await this.getBroadcastDuration(180))
        break
      }
      default: {
        await I.click(await this.getBroadcastDuration(1))

        break
      }
    }
    await I.click(this.submitBroadcastButton)
  }

  async selectAllLocations () {
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i=0; i < numberOfLOcations; i++){
      await I.click(`#check-location-box-${i}`)
    }
  }

  async verifyMultipleBroadcastPage () {
    await I.waitForElement(this.broadcastToLocationsButton, this.timeoutSec)
    await I.see('Multiple Selection Mode')
    await I.seeElement(this.cancelMultipleBroadcastButton)
  }
}

export const locationsPage = new LocationsPage()
