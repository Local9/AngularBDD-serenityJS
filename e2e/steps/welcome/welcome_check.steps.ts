import { defineSupportCode } from 'cucumber';
import { WelcomePage } from './welcome.po';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(({Given, When, Then, Before}) => {
  let app: WelcomePage;

  Before(() => {
    app = new WelcomePage();
  })

  Given(/^I am on the homepage$/,
    () => app.navigateTo());

  Then(/^I should see welcome message$/,
    () => app.getParagraphText().then(text => {
      expect(text).toEqual('Welcome')
    }));

});
