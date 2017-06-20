import { CustomUiAppPage } from './app.po';

describe('custom-ui-app App', function() {
  let page: CustomUiAppPage;

  beforeEach(() => {
    page = new CustomUiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
