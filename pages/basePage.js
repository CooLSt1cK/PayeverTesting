const { until } = require('selenium-webdriver');

class BasePage {
    
    constructor(driver) {
        this.driver = driver;
    }
  
    async waitForElementLocated(locator, timeout = 30000) {
        try {
            await this.driver.wait(until.elementLocated(locator), timeout);
        } catch (error) {
            console.error('Element not located within timeout:', error);
            throw new Error('Element not located within timeout');
        }
    }

    async waitForElementVisible(webElement, timeout = 30000) {
        try {
            await this.driver.wait(until.elementIsVisible(webElement), timeout);
        } catch (error) {
            console.error('Element not visible within timeout:', error);
            throw new Error('Element not visible within timeout');
        }
    }

    async getElement(locator) {
        await this.waitForElementLocated(locator);
        return await this.driver.findElement(locator);
    }

    async clickElement(locator) {
        const element = await this.getElement(locator);
        await element.click();
    }

    async selectElementOption(locator, optionLocator) {
        await this.clickElement(locator);
        await this.clickElement(optionLocator);
    }

    async setInputValue(locator, value) {
        const element = await this.getElement(locator);
        await this.waitForElementVisible(element);
        const actions = this.driver.actions();
        await actions.click(element).sendKeys(value).perform();
    }

    async isPageLoaded() {
        throw new Error('isPageLoaded method must be implemented in the derived class');
    }
  }
  
  module.exports = BasePage;
