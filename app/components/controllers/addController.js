(function(module) {

    var addController = function ($scope, footballerService, $location) {
        $scope.saveFootballer = function (newFootballer) {
            footballerService.addData(newFootballer);
            $location.path('/');
        }
    };

    module.controller("addController", addController);

}(angular.module("app")));