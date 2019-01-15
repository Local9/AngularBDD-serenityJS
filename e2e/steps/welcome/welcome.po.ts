import { browser, by, element } from 'protractor';
import {Client} from '@ng-apimock/base-client';

declare const ngApimock: Client; // match the global name.

export class WelcomePage {
  navigateTo() {
    return ngApimock.selectScenario('welcome', 'real-welcome-title').then(() => {
      return browser.get('/');
    });
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
