
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
  get successfullyReportedButton () { return '//span[text()="Successfully Reported"]' }
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
  get addEntranceCoordinatesButton () { return '#location-add-entrance-coordinates-button' }
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
  get comingSoonCheckbox () { return '#location-coming-soon' }
  get underRepairCheckbox () { return '#location-under-repair' }
  get openingDateDropDown () { return '//*[@id="location-opening-date-form-field"]//button[@aria-label="Open calendar"]' }
  get openedAtDropDown () { return '//*[@id="location-opened-at-form-field"]//button[@aria-label="Open calendar"]' }
  get openedAtEditButton () { return '//button[@id="location-opened-at-edit-button"]' }
  get openingDateClearButton () { return '#location-opening-date-clear-button' }
  get openedAtClearButton () { return '#location-opened-at-clear-button' }
  // Methods
  async googleLocationButtonClick () {
    await I.waitForElement(this.googleLocationButton, basePage.timeoutSec)
    await I.click(this.googleLocationButton)
  }

  async navigateToGoogleMapsLocationButtonClick () {
    await I.waitForElement(this.navigateToGoogleMapsLocationButton, basePage.timeoutSec)
    await I.click(this.navigateToGoogleMapsLocationButton)
  }

  async validateEditLocationPage () {
    await I.waitForElement(this.editLocationFormContainer, basePage.timeoutSec)
    await I.see('Location Details')
    await I.seeElement(this.locationIdField)
    await I.seeElement(this.locationPlugScoreField)
    await I.seeElement(this.locationLocaleField)
    await I.seeElement(this.locationCreatedAtField)
    await I.seeElement(this.locationLastUpdatedAtField)
    await I.seeElement(this.locationNameField)
    await I.see('Photos')
    await I.seeElement(this.uploadNewCoverPhotosButton)
    await I.seeElement(locationsAddNewLocationPage.newLocationAddressField)
    await I.seeElement(locationsAddNewLocationPage.latitudeField)
    await I.seeElement(locationsAddNewLocationPage.longitudeField)
    await I.seeElement(locationsAddNewLocationPage.googleMaps)
    await I.seeElement(locationsAddNewLocationPage.descriptionField)
    await I.seeElement(locationsAddNewLocationPage.phoneField)
    await I.seeElement(locationsAddNewLocationPage.hoursField)
    await I.seeElement(locationsAddNewLocationPage.costDescriptionField)
    await I.seeElement(locationsAddNewLocationPage.accessDropDown)
    await I.seeElement(locationsAddNewLocationPage.pOIDropDown)
    await this.validateReportProblemContainer()
  }

  async updateAllButtonClick () {
    await I.waitForElement(this.updateAllButton, basePage.timeoutSec)
    await I.click(this.updateAllButton)
  }

  async validateReportProblemContainer () {
    await I.waitForElement(this.reportProblemDescribeField, basePage.timeoutSec)
    await I.see('Report Problem')
    await I.see('For all other issues, please send us a message and we\'ll correct the issue. We\'ll resolve the issue or get back to you in less than one business day.')
    await I.seeElement(this.reportProblemButton)
  }

  async editLocationName (newName) {
    await I.waitForElement(this.locationNameField, basePage.timeoutSec)
    await I.fillField(this.locationNameField, newName)
    await I.click(this.updateAllButton)
  }

  async editLocationAddress (newAddress) {
    await I.waitForElement(locationsAddNewLocationPage.newLocationAddressField, basePage.timeoutSec)
    await I.fillField(locationsAddNewLocationPage.newLocationAddressField, newAddress)
    await I.click(this.updateAllButton)
  }

  async pinPhotos () {
    const pin = await I.grabNumberOfVisibleElements(this.unpinPhoto)
    if (pin) {
      this.unpinPhotos()
    }

    await I.waitForElement(this.locationPhotos, this.timeoutSec)
    await I.moveCursorTo(this.locationPhotos, 5, 5)
    await I.click(this.pinPhoto)
  }

  async unpinPhotos () {
    const unPin = await I.grabNumberOfVisibleElements(this.unpinPhoto)
    if (!unPin) {
      this.pinPhotos()
    }

    await I.waitForElement(this.unpinPhoto, this.timeoutSec)
    await I.click(this.unpinPhoto)
  }

  async changeMapTypeToTerrain () {
    await I.waitForElement(this.mapButtonGoogleMaps, this.timeoutSec)
    await I.click(this.mapButtonGoogleMaps)
    await I.waitForElement(this.terrainMapType, this.timeoutSec)
    await I.click(this.terrainMapType)
  }

  async changeMapTypeToSatellite () {
    await I.waitForElement(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.click(this.satelliteButtonGoogleMaps)
  }

  async turnOnLabelsOnSatelliteType () {
    await I.waitForElement(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.click(this.satelliteButtonGoogleMaps)
    await I.waitForElement(this.labelsOnSatelliteTypeButton, this.timeoutSec)
    const labels = await I.grabAttributeFrom(basePage.labelsOnSatelliteTypeButton, 'aria-checked')

    if (!labels) {
      await I.click(this.labelsOnSatelliteTypeButton)
    }
  }

  async turnOffLabelsOnSatelliteType () {
    await I.waitForElement(this.satelliteButtonGoogleMaps, this.timeoutSec)
    await I.click(this.satelliteButtonGoogleMaps)
    await I.waitForElement(this.labelsOnSatelliteTypeButton, this.timeoutSec)
    const labels = await I.grabAttributeFrom(basePage.labelsOnSatelliteTypeButton, 'aria-checked')

    if (labels) {
      await I.click(this.labelsOnSatelliteTypeButton)
    }
  }

  async selectAmenities (all?) {
    await I.waitForElement(this.lodgingCheckbox, this.timeoutSec)
    if (all) {
      await I.click(this.lodgingCheckbox)
      await I.click(this.eVParkingCheckbox)
      await I.click(this.wiFiCheckbox)
      await I.click(this.hikingCheckbox)
      await I.click(this.diningCheckbox)
      await I.click(this.valetParkingCheckbox)
      await I.click(this.shoppingCheckbox)
      await I.click(this.campingCheckbox)
      await I.click(this.restroomsCheckbox)
      await I.click(this.parkCheckbox)
      await I.click(this.groceryCheckbox)
    } else {
      await I.click(this.lodgingCheckbox)
      await I.click(this.eVParkingCheckbox)
      await I.click(this.parkCheckbox)
    }
  }

  async selectParkingAttributes (all?) {
    await I.waitForElement(this.pullThroughParkingOption, this.timeoutSec)
    if (all) {
      await I.click(this.pullThroughParkingOption)
      await I.click(this.pullInParkingOption)
      await I.click(this.trailerParkingOption)
      await I.click(this.trailerFriendlyOption)
      await I.click(this.garageOption)
      await I.click(this.handicappedParkingOption)
      await I.click(this.wheelchariAccessibleOption)
      await I.click(this.illuminatedOption)
    } else {
      await I.click(this.pullThroughParkingOption)
      await I.click(this.trailerFriendlyOption)
      await I.click(this.handicappedParkingOption)
    }
  }

  async selectOpeningDate () {
    const date = new Date()
    const day = date.getDate()
    const openingDateLocator = `//div[text()=" ${day} "]`

    await I.waitForElement(this.openingDateDropDown, this.timeoutSec)
    await I.click(this.openingDateDropDown)
    await I.click(openingDateLocator)
  }

  async selectOpenedAtDate () {
    const date = new Date()
    const day = date.getDate()

    const previouslyAddedOpenedAtDate = await I.grabNumberOfVisibleElements(this.openedAtEditButton)

    if (previouslyAddedOpenedAtDate) {
      await I.click(this.openedAtEditButton)
    }
    await I.waitForElement(this.openedAtDropDown, this.timeoutSec)
    await I.click(this.openedAtDropDown)
    if (day > 19) {
      const openedAtDateLocator = `//div[text()=" ${day - 10} "]`

      await I.click(openedAtDateLocator)
    } else {
      const openedAtDateLocator = `//div[text()=" ${day + 10} "]`

      await I.click(openedAtDateLocator)
    }
  }

  async clearOpeningDate () {
    await I.waitForElement(this.openingDateClearButton,  this.timeoutSec)
    await I.click(this.openingDateClearButton)
  }

  async clearOpenedAt () {
    await I.waitForElement(this.openedAtEditButton,  this.timeoutSec)
    await I.click(this.openedAtEditButton)
    await I.click(this.openedAtClearButton)
  }

  async editDescriptionPhoneHoursCost (description, phone, hours, costDescription) {
    await I.waitForElement(locationsAddNewLocationPage.descriptionField,  this.timeoutSec)
    await I.fillField(locationsAddNewLocationPage.descriptionField, description)
    await I.fillField(locationsAddNewLocationPage.phoneField, phone)
    await I.fillField(locationsAddNewLocationPage.hoursField, hours)
    await I.fillField(locationsAddNewLocationPage.costDescriptionField, costDescription)
    await this.updateAllButtonClick()
  }

  async addEntranceCoordinates (entranceLatitude, entranceLongitude) {
    await I.waitForElement(locationsAddNewLocationPage.descriptionField,  this.timeoutSec)
    const previoslyAddedEntranceCoordinates = await I.grabNumberOfVisibleElements(this.addEntranceCoordinatesButton)
    if (previoslyAddedEntranceCoordinates) {
      await I.click(this.addEntranceCoordinatesButton)
    }
    await I.waitForElement(locationsAddNewLocationPage.entranceLatitudeField, this.timeoutSec)
    await I.fillField(locationsAddNewLocationPage.entranceLatitudeField, entranceLatitude)
    await I.fillField(locationsAddNewLocationPage.entranceLongitudeField, entranceLongitude)
    await this.updateAllButtonClick()
  }

  async addPOIName (option?) {
    await I.waitForElement(locationsAddNewLocationPage.pOIDropDown, basePage.timeoutSec)
    await I.click(locationsAddNewLocationPage.pOIDropDown)
    switch (option) {
      case 'Airport': {
        await I.click(locationsAddNewLocationPage.pOIAirportOption)
        break
      }
      case 'A/C Hall': {
        await I.click(locationsAddNewLocationPage.pOIArenaConcertHallOption)
        break
      }
      case 'Art Gallery': {
        await I.click(locationsAddNewLocationPage.pOIArtGalleryOption)
        break
      }
      case 'Bank': {
        await I.click(locationsAddNewLocationPage.pOIBankOption)
        break
      }
      case 'Campground': {
        await I.click(locationsAddNewLocationPage.pOICampgroundOption)
        break
      }
      default: {
        await I.click('//span[text()="None"]')
        break
      }
    }
    await this.updateAllButtonClick()
  }

  async reportProblemEditPage (problemMessage) {
    await I.waitForElement(this.reportProblemDescribeField, this.timeoutSec)
    await I.fillField(this.reportProblemDescribeField, problemMessage)
    await I.click(this.reportProblemButton)
    await I.waitForText('Message Sent', this.timeoutSec)
    await I.waitForElement(this.successfullyReportedButton, this.timeoutSec)
  }
}

export const locationsEditLocationPage = new LocationsEditLocationPage()
