(function(module) {

    var addCatController = function($scope, $http, $q, $resource, catService) {

        $scope.addKitty = function addKitty(kitty) {
            catService.addCat(kitty);
        };
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));