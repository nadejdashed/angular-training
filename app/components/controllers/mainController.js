(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!";
    };

    module.controller("mainController", mainController);

}(angular.module("app")));