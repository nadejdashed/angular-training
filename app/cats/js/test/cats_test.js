"use strict";

describe("cat module", function() {

  beforeEach(module("myApp.catControl"));

  describe("cat controller", function(){

    it("should ....", inject(function($controller) {
      //spec body
      var CatCtrl = $controller("CatCtrl");
      expect(catCtrl).toBeDefined();
    }));

  });
});
