(function (module) {

    var signInController = function ($scope, userService) {

        $scope.UserAuthentication = function (user) {
            userService.login(user);
        };

    };


    module.controller("signInController", signInController);

}(angular.module("app")));