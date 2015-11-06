(function(module) {

    var mainController = function ($scope) {
        $scope.quantity = 1;
        $scope.getIncrement = function () {
            $scope.quantity += 1;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));