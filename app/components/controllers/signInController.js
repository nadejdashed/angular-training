(function (module) {

    var signInController = function ($scope, getUser) {

        $scope.UserAuthentication = function (user) {
            console.log(getUser);
           // userAuthorizationService.userAuthentication(user);
        };
    };


    module.controller("signInController", signInController);

}(angular.module("app")));