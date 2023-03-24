
import { BasePage } from '../base.page'

export class LocationsHistoryPage extends BasePage {
  // locators
  get checkInHistoryTitle () { return '//div[@class="title"]' }
  // Methods
}

export const locationsHistoryPage = new LocationsHistoryPage()
