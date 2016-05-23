"use strict";

describe("cat module", function() {
    var scope, catControl;

    beforeEach(function() {
        module("myApp");
    });

    beforeEach(angular.mock.inject(function($rootScope, $controller, $injector) {
        scope = $rootScope.$new();

        catControl = $controller("catControl", {
            $scope: scope
        });
    }));

    describe("cat controller", function() {
        it("should ....", inject(function($controller) {
            expect(catControl).toBeDefined();
        }));
    });

    describe("select cat", function() {
        it("should ....", inject(function($controller) {
            var oldCat = {
                "id": "_4zmq46rst",
                "name": "cat1",
                "src": "cats/img/cat1.jpg",
                "votes": 0
            };
            var newCat = {
                "id": "_0k570c0zo",
                "name": "cat2",
                "src": "cats/img/cat2.jpg",
                "votes": 0
            };
            scope.cat = oldCat;
            scope.selectCat(newCat);
            expect(scope.cat).toBe(newCat);
            expect(oldCat.wasSelected).toBe(true);
        }));
    });
});
