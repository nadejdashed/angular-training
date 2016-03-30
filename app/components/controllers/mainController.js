(function (module) {

    var mainController = function ($scope) {
        $scope.text = "Hello Cats";
        $scope.date = new Date();
    };

    module.controller("mainController", mainController);

}(angular.module("app")));