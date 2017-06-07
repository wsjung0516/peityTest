import { JwsAppPage } from './app.po';

describe('jws-app App', () => {
  let page: JwsAppPage;

  beforeEach(() => {
    page = new JwsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
