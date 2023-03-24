
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
  // Methods
  async googleLocationButtonClick () {
    await I.click(this.googleLocationButton)
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

  async validateReportProblemContainer () {
    await I.waitForElement(this.reportProblemDescribeField, basePage.timeoutSec)
    await I.see('Report Problem')
    await I.see('For all other issues, please send us a message and we\'ll correct the issue. We\'ll resolve the issue or get back to you in less than one business day.')
    await I.seeElement(this.reportProblemButton)
  }
}

export const locationsEditLocationPage = new LocationsEditLocationPage()
