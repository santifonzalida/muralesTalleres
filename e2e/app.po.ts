import { browser, by, element } from 'protractor';

export class MuralesTalleresPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
