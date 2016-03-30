(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World from Bu!!!";
    };

    module.controller("mainController", mainController);

}(angular.module("app")));