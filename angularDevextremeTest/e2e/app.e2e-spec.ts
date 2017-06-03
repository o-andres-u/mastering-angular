import { AngularDevextremeTestPage } from './app.po';

describe('angular-devextreme-test App', () => {
  let page: AngularDevextremeTestPage;

  beforeEach(() => {
    page = new AngularDevextremeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
