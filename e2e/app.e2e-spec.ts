import { CurrentcontestsPage } from './app.po';

describe('currentcontests App', function() {
  let page: CurrentcontestsPage;

  beforeEach(() => {
    page = new CurrentcontestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
