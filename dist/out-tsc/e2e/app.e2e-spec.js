import { Chapter10routingPage } from './app.po';
describe('chapter10routing App', function () {
    var page;
    beforeEach(function () {
        page = new Chapter10routingPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map