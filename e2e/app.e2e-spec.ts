import { Angular4starPage } from './app.po';

describe('angular4star App', () => {
  let page: Angular4starPage;

  beforeEach(() => {
    page = new Angular4starPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
