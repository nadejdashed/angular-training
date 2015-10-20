(function (module) {

    var signInController = function ($scope, userService) {

        $scope.UserAuthentication = function (user) {
           // console.log(getUser);
            console.log(userService.login(user));
           // userAuthorizationService.userAuthentication(user);
        };
    };


    module.controller("signInController", signInController);

}(angular.module("app")));