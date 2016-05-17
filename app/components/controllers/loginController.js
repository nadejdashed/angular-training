(function(module) {

    var loginController = function ($scope, $cookies, loginService) {
        $scope.logedIn = loginService.isLoggedIn();
        $scope.loginTo = loginService.loginTo;
    };
    module.controller("loginController", loginController);

}(angular.module("app")));