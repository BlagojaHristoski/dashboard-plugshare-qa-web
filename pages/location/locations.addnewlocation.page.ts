import { BasePage, basePage } from '../base.page'

import { locationsPage } from './locations.page'

const { I } = inject()

export class LocationsAddNewLocationPage extends BasePage {
  // locators
  get createLocationButton () { return '#create-location-button' }
  get newLocationNameField () { return '//input[@id="location-name"]' }
  get newLocationAddressField () { return '#location-address' }
  get latitudeField () { return '#location-latitude' }
  get longitudeField () { return '#location-longitude' }
  get googleMaps () { return '#location-google-map' }
  get entranceLatitudeField () { return '#location-entrance-latitude' }
  get entranceLongitudeField () { return '#location-entrance-longitude' }
  get descriptionField () { return '#location-description' }
  get phoneField () { return '#location-phone' }
  // Locators - Hours
  get open247Checkbox () { return '#location-open247' }
  get hoursField () { return '#location-hours' }
  // Locators - Cost
  get costCheckBox () { return '#location-cost' }
  get costDescriptionField () { return '#location-cost-description' }
  // Locators - Access
  get accessDropDown () { return '#location-access' }
  get accessPublicOption () { return '//mat-option//span[text()="Public"]' }
  get accessRestrictedOption () { return '//mat-option//span[text()="Restricted"]' }
  // Locators - Access Restrictions
  get customersOnlyCheckbox () { return '//input[@value="CUSTOMERS_ONLY"]' }
  get employeesOnlyCheckbox () { return '//input[@value="EMPLOYEES_ONLY"]' }
  get residentsOnlyCheckbox () { return '//input[@value="RESIDENTS_ONLY"]' }
  get rivianDriversOnlyCheckbox () { return '//input[@value="RIVIAN_DRIVERS_ONLY"]' }
  get guestOnlyCheckbox () { return '//input[@value="GUESTS_ONLY"]' }
  get studentsOnlyCheckbox () { return '//input[@value="STUDENTS_ONLY"]' }
  get teslaDriversOnlyCheckbox () { return '//input[@value="TESLA_DRIVERS_ONLY"]' }
  // Locators - Coming Soon
  get openingDateDropDown () { return '#location-opening-date-form-field' }
  get openedAtDropDown () { return '#location-opened-at-form-field' }
  // Locators - Point of interest
  get pOIDropDown () { return '#location-poi-name' }
  get pOIAirportOption () { return '//span[text()="Airport"]' }
  get pOIArenaConcertHallOption () { return '//span[text()="Arena/Concert Hall"]' }
  get pOIArtGalleryOption () { return '//span[text()="Art Gallery"]' }
  get pOIBankOption () { return '//span[text()="Bank"]' }
  get pOICampgroundOption () { return '//span[text()="Campground"]' }
  // Locators - Amenities
  get lodgingCheckbox () { return '#location-amenities-0-input' }
  get diningCheckbox () { return '#location-amenities-1-input' }
  get restroomsCheckbox () { return '#location-amenities-2-input' }
  get eVParkingCheckbox () { return '#location-amenities-3-input' }
  get valetParkingCheckbox () { return '#location-amenities-4-input' }
  get parkCheckbox () { return '#location-amenities-5-input' }
  get wiFiCheckbox () { return '#location-amenities-6-input' }
  get shoppingCheckbox () { return '#location-amenities-7-input' }
  get groceryCheckbox () { return '#location-amenities-8-input' }
  get hikingCheckbox () { return '#location-amenities-9-input' }
  // Locators - Parking Attributes
  get campingCheckbox () { return '#location-amenities-10-input' }
  get pullThroughParkingOption () { return '#location-parking-attributes-0-input' }
  get pullThroughPullInParkingOption () { return '#location-parking-attributes-1-input' }
  get trailerParkingOption () { return '#location-parking-attributes-2-input' }
  get trailerFriendlyOption () { return '#location-parking-attributes-3-input' }
  get garageOption () { return '#location-parking-attributes-4-input' }
  get handicappedParkingOption () { return '#location-parking-attributes-5-input' }
  get wheelchairAccessibleOption () { return '#location-parking-attributes-6-input' }
  get illuminatedOption () { return '#location-parking-attributes-7-input' }
  // Locators - Parking Type Name
  get parkingTypeNameDropDown () { return '#location-parking-type-name' }
  get parkingTypeNoneOption () { return '//mat-option[@value="None"]' }
  get parkingTypeFreeOption () { return '//mat-option[@value="Free"]' }
  get parkingTypePayOption () { return '//mat-option[@value="Pay"]' }
  get parkingTypeCustomersOnlyOption () { return '//mat-option[@value="Customers Only"]' }
  get parkingTypeRestrictedOption () { return '//mat-option[@value="Restricted"]' }
  get parkingTypeUnknownOption () { return '//mat-option[@value="Unknown"]' }
  get overheadClearanceMetersField () { return '#location-overhead-clearance-meters' }
  get parkingLevelField () { return '#location-parking-level' }
  get overheadClearanceFeetField () { return '#location-overhead-clearance-feet' }
  get overheadClearanceInchesField () { return '#location-overhead-clearance-inches' }
  // Locators - Stations
  get addStationButton () { return '#add-station-button' }
  get duplicateButton () { return '.mat-focus-indicator.action-button.duplicate-station-button.mat-stroked-button.mat-button-base.mat-accent' }
  get removeButton () { return '.mat-focus-indicator.action-button.remove-station-button.mat-stroked-button.mat-button-base.mat-warn.ng-star-inserted' }
  get stationNameField () { return '//input[@ng-reflect-name="stationnew2_name"]' }
  get stationCostDropdown () { return '//mat-select[@ng-reflect-name="stationnew2_cost"]' }
  get stationCostFreeOption () { return '//span[contains(@class, "mat-option-text") and normalize-space(text()) = "Free"]' }
  get stationCostUnknownOption () { return '//span[contains(@class, "mat-option-text") and normalize-space(text()) = "Unknown"]' }
  get stationCostPayOption () { return '//span[contains(@class, "mat-option-text") and normalize-space(text()) = "Pay"]' }
  get stationCostDescription () { return '//textarea[@ng-reflect-name="stationnew2_cost_description"]' }
  get stationManufacturer () { return '//input[@ng-reflect-name="stationnew2_manufacturer"]' }
  get stationModel () { return '//input[@ng-reflect-name="stationnew2_model"]' }
  // Locators - Plugs
  get plugTypeDropdown () { return '//mat-select[@ng-reflect-name="stationnew2_outletnew3_outlet_"]' }
  get plugTypeTeslaOption () { return '//span[text()="Tesla (Fast)"]' }
  get plugTypeCCSSAEcomboOption () { return '//span[text()="Quick Charge (CCS/SAE Combo)"]' }
  get plugTypeChademoOption () { return '//span[text()="Quick Charge (CHAdeMO)"]' }
  get plugTypeJ1772 () { return '//span[text()="J-1772"]' }
  get plugKilowattsField () { return '//input[@ng-reflect-name="stationnew2_outletnew3_watts"]' }
  get plugVoltsField () { return '//input[@ng-reflect-name="stationnew2_outletnew3_volts"]' }
  get plugAmpsField () { return '//input[@ng-reflect-name="stationnew2_outletnew3_amps"]' }
  // methods
  async clickOnCreateLocation () {
    await I.waitForElement(this.createLocationButton, this.timeoutSec)
    await I.click(this.createLocationButton)
  }

  async navigateToAddNewLocation () {
    await this.navigateToLocations()
    await I.waitForElement(locationsPage.createNewLocationButton, basePage.timeoutSec)
    await locationsPage.clickOnCreateNewLocation()
  }

  async selectAccessForNewLocation (option) {
    if (option === 'Public') {
      await I.waitForElement(this.accessDropDown, this.timeoutSec)
      await I.click(this.accessDropDown)
      await I.click(this.accessPublicOption)
    } else if (option === 'Restricted') {
      await I.waitForElement(this.accessDropDown, this.timeoutSec)
      await I.click(this.accessDropDown)
      await I.click(this.accessRestrictedOption)
    }
  }

  async selectStationCostForNewLocation (option) {
    if (option === 'Free') {
      await I.waitForElement(this.stationCostDropdown, this.timeoutSec)
      await I.click(this.stationCostDropdown)
      await I.click(this.stationCostFreeOption)
    } else if (option === 'Pay') {
      await I.waitForElement(this.stationCostDropdown, this.timeoutSec)
      await I.click(this.stationCostDropdown)
      await I.click(this.stationCostPayOption)
    }
  }

  async selectPlugType (option) {
    if (option === 'Tesla Fast') {
      await I.waitForElement(this.plugTypeDropdown, this.timeoutSec)
      await I.click(this.plugTypeDropdown)
      await I.click(this.plugTypeTeslaOption)
    } else if (option === 'Combo') {
      await I.waitForElement(this.plugTypeDropdown, this.timeoutSec)
      await I.click(this.plugTypeDropdown)
      await I.click(this.plugTypeCCSSAEcomboOption)
    } else if (option === 'Chademo') {
      await I.waitForElement(this.plugTypeDropdown, this.timeoutSec)
      await I.click(this.plugTypeDropdown)
      await I.click(this.plugTypeChademoOption)
    } else if (option === 'J-1772') {
      await I.waitForElement(this.plugTypeDropdown, this.timeoutSec)
      await I.click(this.plugTypeDropdown)
      await I.click(this.plugTypeJ1772)
    }
  }

  async populateLocationDetailsForNewLocation (locationName, locationAddress, locationLatitude, locationLongitude, locationDescription, costDescription, accessOption?) {
    await I.waitForElement(this.createLocationButton, this.timeoutSec)
    await I.fillField(this.newLocationNameField, locationName)
    await I.fillField(this.newLocationAddressField, locationAddress)
    await I.fillField(this.latitudeField, locationLatitude)
    await I.fillField(this.longitudeField, locationLongitude)
    await I.fillField(this.descriptionField, locationDescription)
    await I.fillField(this.costDescriptionField, costDescription)
    await this.selectAccessForNewLocation(accessOption)
  }

  async populateStationsForNewLocation (stationName, stationCostDescription, costOption) {
    await I.waitForElement(this.createLocationButton, this.timeoutSec)
    await I.fillField(this.stationNameField, stationName)
    await this.selectStationCostForNewLocation(costOption)
    await I.fillField(this.stationCostDescription, stationCostDescription)
  }

  async populatePlugsForNewLocation (kilowatts, plugOption) {
    await I.waitForElement(this.createLocationButton, this.timeoutSec)
    await locationsAddNewLocationPage.selectPlugType(plugOption)
    await I.fillField(this.plugKilowattsField, kilowatts)
  }

  async validatePopUpForEmptyField (emptyField) {
    await I.seeInPopup('Please fix the following errors')
    await I.seeInPopup(`${emptyField}: required`)
  }
}

export const locationsAddNewLocationPage = new LocationsAddNewLocationPage()
