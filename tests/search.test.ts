import { generalPage } from '../pages/general.page'
import * as gc_items from '../lib/data/production.json'
Feature('GC PROD SEARCH BAR')

const items = gc_items.GC.items

Before(async () => {
  await generalPage.navigateToGcProd()
  await generalPage.handlePromotionPopUp()
})

Scenario('Verify user is able to search by category', async ({ I }) => {
  await generalPage.searchItem(items.guitars)
  await I.waitInUrl('https://www.guitarcenter.com/Guitars.gc',  generalPage.timeoutSec)
  await generalPage.verifyGuitarsPLP()
}).tag('@GC').tag('@SearchBar').tag('PLP').tag('@00001')

Scenario('Verify user is able to search by brand', async ({ I }) => {
  await generalPage.searchItem(items.fender)
  await I.waitInUrl('https://www.guitarcenter.com/Fender/',  generalPage.timeoutSec)
  await generalPage.verifyFenderPLP()
}).tag('@GC').tag('@SearchBar').tag('PLP').tag('@00002')

Scenario('Verify user is able to search by product name', async ({ I }) => {
  await generalPage.searchItem(items.rogue_guitar)
  await I.waitInUrl('https://www.guitarcenter.com/Rogue/RA-090-Concert-Cutaway-Acoustic-Electric-Guitar.gc',  generalPage.timeoutSec)
  await generalPage.verifyPDP()
}).tag('@GC').tag('@SearchBar').tag('PLP').tag('@00003')
