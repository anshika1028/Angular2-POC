import { Ng2SamplePage } from './app.po';

describe('ng2-sample App', () => {
  let page: Ng2SamplePage;

  beforeEach(() => {
    page = new Ng2SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
