const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class SantanderPage extends BasePage{
    
    constructor(driver) {
        super(driver);
        this.checkoutApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Checkout"]')
        this.connectApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Connect"]')
        this.transactionsApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Transactions"]')
        this.settingsApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Settings"]')
        this.pointOfSaleApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Point of Sale"]')

        this.companyName = By.xpath('//div[contains(@class, "form-label") and descendant::span[contains(text(), "Company name")]]')
        this.industry = By.css('pe-autocomplete .dropdown-arrow')
        this.industryOption = By.css('mat-option')
        this.phoneNumber = By.xpath('//div[contains(@class, "form-label") and descendant::span[contains(text(), "Phone Number")]]')
        this.vatNumber = By.xpath('//div[contains(@class, "form-label") and descendant::span[contains(text(), "VAT number")]]')
        this.signUpButton = By.css('button.signup-button')
        this.welcomeScreenContentButton = By.className('welcome-screen-content-button')
    }

    async completeSighUp(companyName, phoneNumber, vatNumber) {
        await this.setInputValue(this.companyName, companyName);
        await this.selectElementOption(this.industry, this.industryOption);
        await this.setInputValue(this.vatNumber, vatNumber);
        await this.setInputValue(this.phoneNumber, phoneNumber);
        await this.clickElement(this.signUpButton);
        await this.clickElement(this.welcomeScreenContentButton)
    }
  
    async isPageLoaded() {
        await this.waitForElementLocated(this.transactionsApp);
        await this.waitForElementLocated(this.checkoutApp);
        await this.waitForElementLocated(this.connectApp);
        await this.waitForElementLocated(this.pointOfSaleApp);
        await this.waitForElementLocated(this.settingsApp);
        return true
    }
  }
  
  module.exports = SantanderPage;
