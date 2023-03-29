import { basePage, BasePage } from '../base.page'
import { locationsPage } from './locations.page'
const { I } = inject()

export class LocationsSearchAndFiltersPage extends BasePage {
  // locators
  
  // Methods

  async searchLocation (locationName) {
    await I.waitForElement(locationsPage.locationNameField, this.timeoutSec)
    await I.fillField(locationsPage.locationNameField, locationName)
    await I.click(locationsPage.searchAndApplyFiltersButton)
  }

  async validateSearchedLocationOnScreen (locationName){
    await basePage.waitForProgressBar()
    await I.seeElement(`//a[text()="${locationName}"]`)
  }

}

export const locationsSearchAndFiltersPage = new LocationsSearchAndFiltersPage()
