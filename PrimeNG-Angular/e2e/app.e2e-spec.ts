import { PrimeNGAngularPage } from './app.po';

describe('prime-ng-angular App', () => {
  let page: PrimeNGAngularPage;

  beforeEach(() => {
    page = new PrimeNGAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
