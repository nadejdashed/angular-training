(function (module) {

    var registrationController = function ($scope, $cookies, userService) {

        $scope.saveUser = function (user) {
            user.catVote = {};
            userService.createUser(user);
        };
    };


    module.controller("registrationController", registrationController);

}(angular.module("app")));
