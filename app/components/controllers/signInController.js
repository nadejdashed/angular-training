(function (module) {

    var signInController = function ($scope, userService) {

        $scope.UserAuthentication = function (user) {
            userService.login(user);
           // userAuthorizationService.userAuthentication(user);
        };

    };


    module.controller("signInController", signInController);

}(angular.module("app")));