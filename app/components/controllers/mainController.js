(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!";
        $scope.i = 1;
    };

    module.controller("mainController", mainController);

}(angular.module("app")));