import { browser, by, element } from 'protractor';

declare const ngApimock: any;

export class AngularBDDPage {
  navigateTo() {
    return ngApimock.selectScenario('welcome', 'welcome-title-new').then(() => {
      return browser.get('/');
    });
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
