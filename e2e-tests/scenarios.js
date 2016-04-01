"use strict";

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe("my app", function() {


  it("should automatically redirect to /cats when location hash/fragment is empty", function() {
    browser.get("index.html");
    expect(browser.getLocationAbsUrl()).toMatch("/cats");
  });


  describe("cats", function() {

    beforeEach(function() {
      browser.get("index.html#/cats");
    });


    it("should render cats when user navigates to /cats", function() {
      expect(element.all(by.css("[ng-view] p")).first().getText()).
        toMatch(/partial for cats/);
    });

  });
});
