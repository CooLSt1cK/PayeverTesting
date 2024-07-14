const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class RegistrationPage extends BasePage{
    
    constructor(driver) {
        super(driver);
        this.firstName = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="firstName"]]')
        this.lastName = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="lastName"]]')
        this.email = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="email"]]')
        this.password = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="password"]]')
        this.confirmPass = By.xpath('//div[contains(@class, "form-label") and descendant::input[@formcontrolname="confirmPass"]]')
        this.signUpButton = By.className('signup-button')
    }
  
    async signUp(firstName, lastName, email, password) {
        await this.setInputValue(this.password, password);
        await this.setInputValue(this.confirmPass, password);
        await this.setInputValue(this.firstName, firstName);
        await this.setInputValue(this.lastName, lastName);
        await this.setInputValue(this.email, email);
        await this.clickElement(this.signUpButton)
    }

    async isPageLoaded() {
        await this.waitForElementVisible(this.getElement(this.signUpButton))
    }
  }
  
  module.exports = RegistrationPage;
