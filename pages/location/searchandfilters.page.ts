import { BasePage, basePage } from '../base.page'

import { locationsPage } from './locations.page'

import assert = require('assert')
const { I } = inject()

export class LocationsSearchAndFiltersPage extends BasePage {
  // locators
  get stateSuggestions() { return '//div[@role="listbox"]' }
  get alreadySortByDateCreated() { return '//span[text()="Date Created"]' }
  get alreadySortByScore() { return '//span[text()="Score"]' }
  get alreadySortByName() { return '//span[text()="Name"]' }
  get alreadySortAscending() { return '//span[text()="Ascending"]' }
  get locationDateCreated() { return '#location-dated-created-0' }
  get locationScore() { return '#location-score-0' }
  get noResultsFromFilter() { return '//td[text()=" No results "]' }
  // Methods

  async searchLocationByName(locationName) {
    await I.waitForElement(locationsPage.locationNameField, this.timeoutSec)
    await I.fillField(locationsPage.locationNameField, locationName)
    await I.click(locationsPage.searchAndApplyFiltersButton)
  }

  async searchLocationByAddress(locationAddress) {
    await I.waitForElement(locationsPage.locationNameField, this.timeoutSec)
    await I.fillField(locationsPage.addressField, locationAddress)
    await I.click(locationsPage.searchAndApplyFiltersButton)
  }

  async searchLocationByState(locationState) {
    const locationStateLocator = `//mat-option//span[text()="${locationState}"]`
    await I.waitForElement(locationsPage.locationNameField, this.timeoutSec)
    await I.fillField(locationsPage.stateField, locationState)
    await I.click(locationStateLocator)
  }

  async searchLocationByZipCode(locationPostalCodeField) {
    await I.waitForElement(locationsPage.postalCodeField, this.timeoutSec)
    await I.fillField(locationsPage.postalCodeField, locationPostalCodeField)
    await I.click(locationsPage.searchAndApplyFiltersButton)
  }

  async validateSearchedLocationOnScreen(location) {
    await basePage.waitForProgressBar()
    await I.seeElement(`//a[text()="${location}"]`)
  }

  async searchComingSoonLocations() {
    await I.waitForElement(locationsPage.comingSoonCheckbox, this.timeoutSec)
    await I.click(locationsPage.comingSoonCheckbox)
    await I.click(locationsPage.searchAndApplyFiltersButton)
  }

  async searchUnderRepairLocations() {
    await I.waitForElement(locationsPage.underRepairCheckbox, this.timeoutSec)
    await I.click(locationsPage.underRepairCheckbox)
    await I.click(locationsPage.searchAndApplyFiltersButton)
  }

  async searchLocationsWithActiveBroadcast() {
    await I.waitForElement(locationsPage.hasActiveBroadcastCheckbox, this.timeoutSec)
    await I.click(locationsPage.hasActiveBroadcastCheckbox)
    await I.click(locationsPage.searchAndApplyFiltersButton)

    await basePage.waitForProgressBar()
    const results = await I.grabNumberOfVisibleElements(this.noResultsFromFilter)

    console.log(results)
    if (results === 1) {
      await I.click(locationsPage.hasActiveBroadcastCheckbox)
      await I.click(locationsPage.searchAndApplyFiltersButton)
      const broadcast = 'New Broadcast from QA team'

      await locationsPage.addBroadcastIfDoNotExists(broadcast)
    }
  }

  async sortByDateCreatedDescending() {
    await I.waitForElement(locationsPage.sortByDropDown, this.timeoutSec)
    const alreadySortByDateCreated = await I.grabNumberOfVisibleElements(this.alreadySortByDateCreated)

    if (!alreadySortByDateCreated) {
      await I.waitForElement(locationsPage.sortByDropDown, this.timeoutSec)
      await I.click(locationsPage.sortByDropDown)
      await I.click(locationsPage.sortByDateCreatedOption)
    }
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i = 0; i < numberOfLOcations - 1; i++) {
      const firstDate = await I.grabTextFrom(`#location-dated-created-${i}`)
      const secondDate = await I.grabTextFrom(`#location-dated-created-${i + 1}`)
      const firstDateParsed = Date.parse(firstDate)
      const secondDateParsed = Date.parse(secondDate)
      assert(firstDateParsed >= secondDateParsed)
    }
  }

  async sortByScoreAllPages() {
    await this.sortByScore()

    const enabledNextButton = await I.grabAttributeFrom(locationsPage.nextPageTopButton, 'ng-reflect-disabled')
    console.log(enabledNextButton)
    for (let i = 0; i < 4; i++) {
      await I.click(locationsPage.nextPageTopButton)
      await I.wait(1)
      await this.sortByScore()
    }
  }

  async sortByScore() {
    await I.waitForElement(locationsPage.firstLocationCheckBox, this.timeoutSec)
    const alreadySortByScoreLocator = await I.grabNumberOfVisibleElements(this.alreadySortByScore)

    if (!alreadySortByScoreLocator) {
      await I.waitForElement(locationsPage.sortByDropDown, this.timeoutSec)
      await I.click(locationsPage.sortByDropDown)
      await I.click(this.alreadySortByScore)
    }
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i = 0; i < numberOfLOcations - 1; i++) {
      const firstScore = await I.grabTextFrom(`#location-score-${i}`)
      const firstScoreNumber: number = +firstScore;
      const secondScore = await I.grabTextFrom(`#location-score-${i + 1}`)
      const secondScoreNumber: number = +secondScore;


      assert(firstScoreNumber >= secondScoreNumber)
    }
  }

  async sortByName() {
    await I.waitForElement(locationsPage.sortByDropDown, this.timeoutSec)
    const alreadySortByDateCreated = await I.grabNumberOfVisibleElements(this.alreadySortByName)
    let locationNames = new Array();

    if (alreadySortByDateCreated) {
      await I.waitForElement(locationsPage.sortByDropDown, this.timeoutSec)
      await I.click(locationsPage.sortByDropDown)
      await I.click(locationsPage.sortByNameOption)
    }
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i = 0; i < numberOfLOcations - 1; i++) {
      locationNames.push(await I.grabTextFrom(`#location-plugshare-link-${i}`))
    }
    const sortedDescendingNamesList = locationNames.sort((one, two) => (one > two ? -1 : 1));
    assert(locationNames === sortedDescendingNamesList)
  }

  async sortAscendingByDateCreated() {
    await I.waitForElement(locationsPage.directionDropDown, this.timeoutSec)
    await I.click(locationsPage.directionDropDown)
    await I.click(locationsPage.directionAscendingOption)
    await basePage.waitForProgressBar()
    const numberOfLOcations = await I.grabNumberOfVisibleElements(locationsPage.locationContainer)
    for (let i = 0; i < numberOfLOcations - 1; i++) {
      const firstDate = await I.grabTextFrom(`#location-dated-created-${i}`)
      const secondDate = await I.grabTextFrom(`#location-dated-created-${i + 1}`)
      const firstDateParsed = Date.parse(firstDate)
      const secondDateParsed = Date.parse(secondDate)
      assert(firstDateParsed <= secondDateParsed)
    }
  }

  async selectNumberOfLocations(numberOfLOcations) {
    let locationNames = new Array();
    console.log(numberOfLOcations)
    for (let i = 0; i <= numberOfLOcations - 1; i++) {
      await I.click(`#check-location-box-${i}`)
      locationNames.push(await I.grabTextFrom(`#location-plugshare-link-${i}`))
    }
    return locationNames
  }

}

export const locationsSearchAndFiltersPage = new LocationsSearchAndFiltersPage()
