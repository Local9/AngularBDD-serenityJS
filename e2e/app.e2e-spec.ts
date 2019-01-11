import { AngularBDDPage } from './app.po';

describe('angular-bdd App', () => {
  let page: AngularBDDPage;

  beforeEach(() => {
    page = new AngularBDDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.getParagraphText().then(result => {
      expect(result).toEqual('Welcome to the app!!');
    })
  });
});
