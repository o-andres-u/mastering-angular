import { VentaPOSOfflinePage } from './app.po';

describe('venta-pos-offline App', () => {
  let page: VentaPOSOfflinePage;

  beforeEach(() => {
    page = new VentaPOSOfflinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
