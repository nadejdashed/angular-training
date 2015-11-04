(function(module) {

    var addCatController = function ($scope, catsService) {
        $scope.submit = function(cat) {
            catsService.addCatPromise(cat);
        };
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));