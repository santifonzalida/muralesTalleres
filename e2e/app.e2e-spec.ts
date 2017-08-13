import { MuralesTalleresPage } from './app.po';

describe('murales-talleres App', () => {
  let page: MuralesTalleresPage;

  beforeEach(() => {
    page = new MuralesTalleresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
