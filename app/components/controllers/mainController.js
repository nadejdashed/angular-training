(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello Cats";
    };

    module.controller("mainController", mainController);

}(angular.module("app")));