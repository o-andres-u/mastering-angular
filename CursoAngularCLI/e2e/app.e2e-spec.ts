import { CursoAngularCLIPage } from './app.po';

describe('curso-angular-cli App', function() {
  let page: CursoAngularCLIPage;

  beforeEach(() => {
    page = new CursoAngularCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
