import {browser, by, element} from 'protractor';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

export = function myStepDefinitions () {

  this.Given(/^I am on the homepage$/, function (callback) {
    ngApimock.selectScenario('welcome', 'welcome-new-title').then(() => {
      browser.get('/').then(callback());
    });
  });


  this.Then(/^I should see welcome message$/, function (callback) {
    const el = element(by.css('app-root h1')).getText();
    return expect(el).to.eventually.equal('Welcome to the new app!!').then(function () {
      callback();
    }).catch(function (err) {
      callback(err);
    });
  });

};
