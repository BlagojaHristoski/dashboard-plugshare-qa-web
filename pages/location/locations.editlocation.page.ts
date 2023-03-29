
import { BasePage, basePage } from '../base.page'
import { locationsAddNewLocationPage } from './locations.addnewlocation.page'
const { I } = inject()

export class LocationsEditLocationPage extends BasePage {
  // locators
  get editLocationTitle () { return '//h2[text()="Edit Location"]' }
  get editLocationFormContainer () { return '#locationForm' }
  get locationIdField () { return '#location-id' }
  get locationPlugScoreField () { return '#location-plugscore' }
  get locationLocaleField () { return '#location-locale' }
  get locationCreatedAtField () { return '#location-created-at' }
  get locationLastUpdatedAtField () { return '#location-updated-at' }
  get locationNameField () { return '#location-name' }
  get uploadNewCoverPhotosButton () { return '#location-photo-upload-photo-button' }
  get operatorMessageField () { return '#location-operator-message' }
  get operatorMessageCreatedAtField () { return '#location-operator-message-created-at' }
  get operatorMessageExpiredAtField () { return '#location-operator-message-expiration' }
  get updateAllButton () { return '#update-location-button-bottom' }
  get reportProblemDescribeField () { return '#report-problem-input' }
  get reportProblemButton () { return '#report-problem-button' }
  get googleLocationButton () { return '//a[@id="location-address"]' }
  get locationNameTitle () { return '//h1[@class="location-name ng-star-inserted"]' }
  get locationPhotos () { return '//img[@class="thumbnail"]' }
  get pinPhoto () { return '#pin-photo-0' }
  get unpinPhoto () { return '#unpin-photo-0' }
  get navigateToGoogleMapsLocationButton () { return '//img[@alt="Google"]' }
  get lodgingCheckbox () { return '//span[text()="Lodging"]' }
  get diningCheckbox () { return '//span[text()="Dining"]' }
  get restroomsCheckbox () { return '//span[text()="Restrooms"]' }
  get eVParkingCheckbox () { return '//span[text()="EV Parking"]' }
  get valetParkingCheckbox () { return '//span[text()="Valet Parking"]' }
  get parkCheckbox () { return '//span[text()="Park"]' }
  get wiFiCheckbox () { return '//span[text()="WiFi"]' }
  get shoppingCheckbox () { return '//span[text()="Shopping"]' }
  get groceryCheckbox () { return '//span[text()="Grocery"]' }
  get hikingCheckbox () { return '//span[text()="Hiking"]' }
  get campingCheckbox () { return '//span[text()="Camping"]' }
  // Locators - Parking Attributes
  get pullThroughParkingOption () { return '//span[text()="Pull through parking"]' }
  get pullInParkingOption () { return '//span[text()="Pull in parking"]' }
  get trailerParkingOption () { return '//span[text()="Trailer parking"]' }
  get trailerFriendlyOption () { return '//span[text()="Trailer friendly"]' }
  get garageOption () { return '//span[text()="Garage"]' }
  get handicappedParkingOption () { return '//span[text()="Handicapped parking"]' }
  get wheelchariAccessibleOption () { return '//span[text()="Wheelchair accessible"]' }
  get illuminatedOption () { return '//span[text()="Illuminated"]' }
  // Locators - Coming Soon
  get openingDateDropDown () { return '//*[@id="location-opening-date-form-field"]//button[@aria-label="Open calendar"]' }
  get openedAtDropDown () { return '//*[@id="location-opened-at-form-field"]//button[@aria-label="Open calendar"]' }
  get openedAtEditButton () { return '//button[@id="location-opened-at-edit-button"]' }

  // Methods
  async googleLocationButtonClick () {
    await I.clickEle(this.googleLocationButton, basePage.timeoutSec)
  }

  async navigateToGoogleMapsLocationButtonClick () {
    await I.waitForEle(this.navigateToGoogleMapsLocationButton, basePage.timeoutSec)
    await I.clickEle(this.navigateToGoogleMapsLocationButton, basePage.timeoutSec)
  }

  async validateEditLocationPage () {
    await I.waitForEle(this.editLocationFormContainer, basePage.timeoutSec)
    await I.see('Location Details')
    await I.shouldSeeEle(this.locationIdField, basePage.timeoutSec)
    await I.shouldSeeEle(this.locationPlugScoreField, basePage.timeoutSec)
    await I.shouldSeeEle(this.locationLocaleField, basePage.timeoutSec)
    await I.shouldSeeEle(this.locationCreatedAtField, basePage.timeoutSec)
    await I.shouldSeeEle(this.locationLastUpdatedAtField, basePage.timeoutSec)
    await I.shouldSeeEle(this.locationNameField, basePage.timeoutSec)
    await I.see('Photos')
    await I.shouldSeeEle(this.uploadNewCoverPhotosButton, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.newLocationAddressField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.latitudeField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.longitudeField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.googleMaps, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.descriptionField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.phoneField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.hoursField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.costDescriptionField, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.accessDropDown, basePage.timeoutSec)
    await I.shouldSeeEle(locationsAddNewLocationPage.pOIDropDown, basePage.timeoutSec)
    await this.validateReportProblemContainer()
  }

  async updateAllButtonClick () {
    await I.waitForEle(this.updateAllButton, basePage.timeoutSec)
    await I.clickEle(this.updateAllButton, basePage.timeoutSec)
  }

  async validateReportProblemContainer () {
    await I.waitForEle(this.reportProblemDescribeField, basePage.timeoutSec)
    await I.see('Report Problem')
    await I.see('For all other issues, please send us a message and we\'ll correct the issue. We\'ll resolve the issue or get back to you in less than one business day.')
    await I.shouldSeeEle(this.reportProblemButton, this.timeoutSec)
  }

  async editLocationName (newName) {
    await I.waitForEle(this.locationNameField, basePage.timeoutSec)
    await I.fillEleField(this.locationNameField, newName)
    await I.clickEle(this.updateAllButton, basePage.timeoutSec)
  }

  async editLocationAddress (newAddress) {
    await I.waitForEle(locationsAddNewLocationPage.newLocationAddressField, basePage.timeoutSec)
    await I.fillEleField(locationsAddNewLocationPage.newLocationAddressField, newAddress)
    await I.clickEle(this.updateAllButton, basePage.timeoutSec)
  }

  async pinPhotos () {
    await I.waitForEle(this.locationPhotos, this.timeoutSec)
    await I.moveCursorTo(this.locationPhotos, 5, 5)
    await I.clickEle(this.pinPhoto, this.timeoutSec)
  }

  async unpinPhotos () {
    await I.clickEle(this.unpinPhoto, this.timeoutSec)
  }

  async changeMapTypeToTerrain () {
    await I.waitForEle(this.mapButtonGoogleMaps, this.timeoutSec)
    await I.clickEle(this.mapButtonGoogleMaps, this.timeoutSec)
    await I.waitForEle(this.terrainMapType, this.timeoutSec)
    await I.clickEle(this.terrainMapType, this.timeoutSec)
  }

  async changeMapTypeToSatellite () {
    await I.waitForEle(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.clickEle(this.satelliteButtonGoogleMaps, this.timeoutSec)
  }

  async turnOnLabelsOnSatelliteType () {
    await I.waitForEle(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.clickEle(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.waitForEle(this.labelsOnSatelliteTypeButton, this.timeoutSec)
    const labels = await I.grabAttributeFrom(basePage.labelsOnSatelliteTypeButton, 'aria-checked')

    if (!labels) {
      await I.clickEle(this.labelsOnSatelliteTypeButton, this.timeoutSec)
    }
  }

  async turnOffLabelsOnSatelliteType () {
    await I.waitForEle(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.clickEle(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.waitForEle(this.labelsOnSatelliteTypeButton, this.timeoutSec)
    const labels = await I.grabAttributeFrom(basePage.labelsOnSatelliteTypeButton, 'aria-checked')

    if (labels) {
      await I.clickEle(this.labelsOnSatelliteTypeButton, this.timeoutSec)
    }
  }

  async selectAmenities (all?) {
    await I.waitForEle(this.lodgingCheckbox, this.timeoutSec)
    if (all) {
      await I.clickEle(this.lodgingCheckbox, this.timeoutSec)
      await I.clickEle(this.eVParkingCheckbox, this.timeoutSec)
      await I.clickEle(this.wiFiCheckbox, this.timeoutSec)
      await I.clickEle(this.hikingCheckbox, this.timeoutSec)
      await I.clickEle(this.diningCheckbox, this.timeoutSec)
      await I.clickEle(this.valetParkingCheckbox, this.timeoutSec)
      await I.clickEle(this.shoppingCheckbox, this.timeoutSec)
      await I.clickEle(this.campingCheckbox, this.timeoutSec)
      await I.clickEle(this.restroomsCheckbox, this.timeoutSec)
      await I.clickEle(this.parkCheckbox, this.timeoutSec)
      await I.clickEle(this.groceryCheckbox, this.timeoutSec)
    } else {
      await I.clickEle(this.lodgingCheckbox, this.timeoutSec)
      await I.clickEle(this.eVParkingCheckbox, this.timeoutSec)
      await I.clickEle(this.parkCheckbox, this.timeoutSec)
    }
  }

  async selectParkingAttributes (all?) {
    await I.waitForEle(this.pullThroughParkingOption, this.timeoutSec)
    if (all) {
      await I.clickEle(this.pullThroughParkingOption, this.timeoutSec)
      await I.clickEle(this.pullInParkingOption, this.timeoutSec)
      await I.clickEle(this.trailerParkingOption, this.timeoutSec)
      await I.clickEle(this.trailerFriendlyOption, this.timeoutSec)
      await I.clickEle(this.garageOption, this.timeoutSec)
      await I.clickEle(this.handicappedParkingOption, this.timeoutSec)
      await I.clickEle(this.wheelchariAccessibleOption, this.timeoutSec)
      await I.clickEle(this.illuminatedOption, this.timeoutSec)
    } else {
      await I.clickEle(this.pullThroughParkingOption, this.timeoutSec)
      await I.clickEle(this.trailerFriendlyOption, this.timeoutSec)
      await I.clickEle(this.handicappedParkingOption, this.timeoutSec)
    }
  }

  async selectOpeningDate () {
    const date = new Date()
    const day = date.getDate()
    const openingDateLocator = `//div[text()=" ${day} "]`

    await I.waitForEle(this.openingDateDropDown, this.timeoutSec)
    await I.clickEle(this.openingDateDropDown, this.timeoutSec)
    await I.clickEle(openingDateLocator, this.timeoutSec)
  }

  async selectOpenedAtDate () {
    const date = new Date()
    const day = date.getDate()

    const previouslyAddedOpenedAtDate = await I.grabNumberOfVisibleElements(this.openedAtEditButton)

    if (previouslyAddedOpenedAtDate) {
      await I.clickEle(this.openedAtEditButton, this.timeoutSec)
    }
    await I.waitForEle(this.openedAtDropDown, this.timeoutSec)
    await I.clickEle(this.openedAtDropDown, this.timeoutSec)
    if (day > 19) {
      const openedAtDateLocator = `//div[text()=" ${day - 10} "]`

      await I.clickEle(openedAtDateLocator, this.timeoutSec)
    } else {
      const openedAtDateLocator = `//div[text()=" ${day + 10} "]`

      await I.clickEle(openedAtDateLocator, this.timeoutSec)
    }
  }
}

export const locationsEditLocationPage = new LocationsEditLocationPage()
