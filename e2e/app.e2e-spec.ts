import { Chapter10routingPage } from './app.po';

describe('chapter10routing App', () => {
  let page: Chapter10routingPage;

  beforeEach(() => {
    page = new Chapter10routingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
