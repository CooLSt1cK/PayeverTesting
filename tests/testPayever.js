const { Builder } = require('selenium-webdriver');
const { assert } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const PageFactory = require('../pages/pageFactory');
const { generateRandomEmail, generateRandomPassword } = require('../util/util');

describe('Test Payever', function () {
  let driver;
  let pageFactory;
  let email;
  let password;
  const targetURI = 'https://testing.com' // replaced due to non-disclosure agreement

  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({ implicit: 200 });
    pageFactory = new PageFactory(driver);
    email = generateRandomEmail();
    password = generateRandomPassword();
  });
  
  it('verify apps on the home page for fashion', async function () { // this test failse because there is no Message app on the page, testcase needs update
    await driver.get(`${targetURI}/registration/fashion`);
    const registrationPage = pageFactory.createRegistrationPage();
    await registrationPage.signUp('Test', 'Test', email, password);
      
    const fashionPage = pageFactory.createFashionPage();
    await fashionPage.completeSighUp('Test', '12341234');
    assert.isTrue(await fashionPage.isPageLoaded())
  });

  it('verify apps on the home page for santander', async function () {
    await driver.get(`${targetURI}/registration/santander`);
    const registrationPage = pageFactory.createRegistrationPage();
    await registrationPage.signUp('Test', 'Test', email, password);
      
    const santanderPage = pageFactory.createSantanderPage();
    await santanderPage.completeSighUp('Test', '12341234', 'DE999999999');
    assert.isTrue(await santanderPage.isPageLoaded())
  });

  afterEach(async function () {
    await driver.quit();
  });
});