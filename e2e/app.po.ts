import { browser, by, element } from 'protractor';

export class CarouselPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeading() {
    return element(by.css('b-root h2')).getText();
  }
}
