import { NgMessPage } from './app.po';

describe('ng-mess App', () => {
  let page: NgMessPage;

  beforeEach(() => {
    page = new NgMessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
