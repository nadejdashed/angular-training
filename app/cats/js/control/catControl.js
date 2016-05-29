"use strict";

angular.module("myApp.catControl", [])
// todo: use different controller for each view,
// otherwise, it becomes a blob
    .controller("CatControl", function ($scope, $state, catService) {
        catService.getAll().then(function (cats) {
            $scope.cats = cats;
            $scope.cat = cats[0];
        });

        // it will save the cat even on initial load, and while typing
        // todo: save in optimal way, for example on blur, please see mg-model-options
        $scope.$watch("cats", function () {
            catService.save($scope.cats);
        }, true);

        $scope.selectCat = function (cat) {
            if ($scope.cat !== cat) {
                $scope.cat.wasSelected = true;
                $scope.cat = cat;
            }
        };

        $scope.findCat = function () {
            $scope.filterExpression = $scope.searchText;
        };

        $scope.newCat = {};

        $scope.add = function (newCat) {
            // todo: it would make more sense to create a new cat with default fields,
            // then to extend it, please see angular.copy
            $scope.cats.push({
                id: "_" + Math.random().toString(36).substr(2, 9),
                name: newCat.name,
                src: newCat.url,
                votes: 0
            });
            $state.go("cats");
        };

        $scope.reset = function () {
            $scope.newCat = {};
        }
    });
