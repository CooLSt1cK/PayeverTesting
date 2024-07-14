const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class FashionPage extends BasePage{
    
    constructor(driver) {
        super(driver);
        this.checkoutApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Checkout"]')
        this.connectApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Connect"]')
        this.transactionsApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Transactions"]')
        this.settingsApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Settings"]')
        this.productsApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Products"]')
        this.shopApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Shop"]')
        this.messageApp = By.xpath('//apps-widget//*[@class="icons__title" and text()="Message"]')

        this.companyName = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="name"]]')
        this.phoneNumber = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="phoneNumber"]]')
        this.welcomeScreenContentButton = By.className('welcome-screen-content-button')
        this.signUpButton = By.className('signup-button')
    }
  
    async completeSighUp(companyName, phoneNumber) {
        await this.setInputValue(this.companyName, companyName);
        await this.setInputValue(this.phoneNumber, phoneNumber);
        await this.clickElement(this.signUpButton);
        await this.clickElement(this.welcomeScreenContentButton)
    }

    async isPageLoaded() {
        await this.waitForElementLocated(this.transactionsApp);
        await this.waitForElementLocated(this.checkoutApp);
        await this.waitForElementLocated(this.connectApp);
        await this.waitForElementLocated(this.productsApp);
        await this.waitForElementLocated(this.shopApp);
        await this.waitForElementLocated(this.messageApp);
        await this.waitForElementLocated(this.settingsApp);
        return true
    }
  }
  
  module.exports = FashionPage;
