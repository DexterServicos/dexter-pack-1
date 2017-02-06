import { DexterPage } from './app.po';

describe('dexter App', function() {
  let page: DexterPage;

  beforeEach(() => {
    page = new DexterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
