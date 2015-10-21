(function (module) {

    var signInController = function ($scope, userService, $location) {

        $scope.UserAuthentication = function (user) {
            userService.login(user);
            $location.path('/');
        };
    };

    module.controller("signInController", signInController);
}(angular.module("app")));