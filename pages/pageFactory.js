const RegistrationPage = require('./registration');
const FashionPage = require('./fashion');
const SantanderPage = require('./santander');

class PageFactory {
  constructor(driver) {
    this.driver = driver;
  }

  createRegistrationPage() {
    return new RegistrationPage(this.driver);
  }

  createFashionPage() {
    return new FashionPage(this.driver);
  }

  createSantanderPage() {
    return new SantanderPage(this.driver);
  }
}

module.exports = PageFactory;