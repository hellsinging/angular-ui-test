import { AngularUiTestPage } from './app.po';

describe('angular-ui-test App', function() {
  let page: AngularUiTestPage;

  beforeEach(() => {
    page = new AngularUiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aut works!');
  });
});
