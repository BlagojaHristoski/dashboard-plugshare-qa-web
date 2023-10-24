const URL = process.env.BASE_URL
const { I } = inject()

export class GeneralPage {
  number: any
  // locators

  get timeoutSec() { return Number(process.env.TIMEOUT) || 30 }
  get searchBar() { return '//input[@id="typeAheadSearchInput"]' }
  get guitarsBreadcrumbs() { return '//span[contains(@class, "breadcrumb")]//a[@href="/Guitars.gc"]' }
  get fenderBreadcrumbs() { return '//span[contains(@class, "breadcrumb")]//a[@href="/Fender/"]' }
  get categoryTile() { return '//section[@class="category-tile-large"]' }
  get promoCartSection() { return '.promo-card' }
  get brandBaner() { return '//section[@class="brand-banner"]' }
  get productItemPLP() { return `//section[@s-object-region="product-item-${this.number}"]` }
  get minPriceInput() { return '#minPrice' }
  get maxPriceInput() { return '#maxPrice' }
  get promotionPopUp() { return '//form[contains(@id, "step-1")]' }
  get noThanksButton() { return '//form[contains(@id, "step-1")]//button[@aria-label="No Thanks; close the dialog"]' }
  get footer() { return '//*[@class="footer-desktop block"]' }

  // PDP
  get pdpRightRail() { return '//section[@id="PDPRightRailWrapper"]' }
  get productImagePDP() { return '//section[@id="pdp-gallery"]' }
  get stickyNavPDP() { return '//div[@id="pdp-navigation"]' }
  get peopleAlsoViewedSection() { return '//*[contains(text(),"People Also Viewed")]/..' }
  get productDescriptionPDP() { return '//div[@id="productDescription"]' }
  get productFeaturePDP() { return '//div[@id="productFeatures"]' }
  get productReviewPDP() { return '//div[@id="productReview"]' }
  get productQAPDP() { return '//div[@id="productQuestions"]' }
  get reviewsMenu() { return '//div[@id="pdp-navigation"]//a[contains(text(),"Reviews")]' }
  get reviewsStickyMenu() { return '//div[@id="pdp-navigation-sticky"]//a[contains(text(),"Reviews")]' }
  get qaStickyMenu() { return '//div[@id="pdp-navigation-sticky"]//a[contains(text(),"Q&A")]' }


  // methods
  async navigateToGcProd() {
    await I.amOnPage(`${URL}/`)
  }

  async handlePromotionPopUp() {
    let maxSeconds = 10
    for (let i = 0; i < maxSeconds; i++) {
      let popUp = await I.grabNumberOfVisibleElements(this.promotionPopUp)
      if (popUp === 1) {
        await I.click(this.noThanksButton)
        await I.waitForInvisible(this.promotionPopUp, this.timeoutSec)
        break
      }
    }

  }

  async searchItem(item: string) {
    await I.waitForElement(this.searchBar, this.timeoutSec)
    await I.fillField(this.searchBar, item)
    await I.pressKey('Enter')
  }

  async verifyItemsOnPLP() {
    for (this.number = 0; this.number <= 23; this.number++) {
      await I.seeElement(this.productItemPLP)
    }
  }

  async verifyPriceFilter() {
    await I.waitForElement(this.minPriceInput, this.timeoutSec)
    await I.see('Price')
    await I.seeElement(this.maxPriceInput)
  }

  async verifyGuitarsPLP() {
    await this.handlePromotionPopUp()
    await I.waitForElement(this.guitarsBreadcrumbs, this.timeoutSec)
    await I.seeElement(this.categoryTile)
    await I.seeElement(this.promoCartSection)
    await this.verifyItemsOnPLP()
    await I.see('Availability')
    await I.see('Category')
    await I.see('Savings & specials')
    await this.verifyPriceFilter()
    await I.see('Brand')
    await I.see('Condition')
  }

  async verifyFenderPLP() {
    await this.handlePromotionPopUp()
    await I.waitForElement(this.fenderBreadcrumbs, this.timeoutSec)
    await I.seeElement(this.categoryTile)
    await I.seeElement(this.brandBaner)
    await this.verifyItemsOnPLP()
    await I.see('Availability')
    await I.see('Category')
    await I.see('Savings & specials')
    await this.verifyPriceFilter()
    await I.see('Condition')
  }

  async verifyPDP() {
    await this.handlePromotionPopUp()
    await I.waitForElement(this.footer, this.timeoutSec)
    await I.waitForElement(this.pdpRightRail, this.timeoutSec)
    await I.waitForElement(this.productImagePDP, this.timeoutSec)
    await I.waitForElement(this.stickyNavPDP, this.timeoutSec)
    await I.waitForElement(this.productDescriptionPDP, this.timeoutSec)
    await I.waitForElement(this.productFeaturePDP, this.timeoutSec)
    await I.click(this.reviewsMenu)
    await I.waitForElement(this.productReviewPDP, this.timeoutSec)
    await I.waitForElement(this.qaStickyMenu, this.timeoutSec)
    await I.click(this.qaStickyMenu)
    await I.waitForElement(this.productQAPDP, this.timeoutSec)
  }

  async scrollToFooter() {
    await I.scrollTo(this.footer)
  }
}

export const generalPage = new GeneralPage()
