import { browser, element, by } from 'protractor';
var Chapter10routingPage = /** @class */ (function () {
    function Chapter10routingPage() {
    }
    Chapter10routingPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    Chapter10routingPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return Chapter10routingPage;
}());
export { Chapter10routingPage };
//# sourceMappingURL=app.po.js.map