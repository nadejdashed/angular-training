(function(module) {

    var authenticationController = function ($scope, authenticationService, displayExceptionService) {

        $scope.registration = function(user){
            authenticationService.registration(user);
        };

        $scope.login = function(user){
            authenticationService.login(user);
        };

    };

    module.controller("authenticationController", authenticationController);

}(angular.module("app")));