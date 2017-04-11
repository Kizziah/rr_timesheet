import { RrTimesheetPage } from './app.po';

describe('rr-timesheet App', function() {
  let page: RrTimesheetPage;

  beforeEach(() => {
    page = new RrTimesheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
