/**
 * Created by vv on 19.10.2015.
 */
/*
(function(module) {

    var userController = function ($scope, userFactory, $routeParams, $location) {

        $scope.registrateUser = function(user)  {
            userFactory.registrateUser(user);
            $location.url('/cats');
        };

        $scope.loginUser = function(user)  {
            userFactory.loginUser(user);
            $location.url('/cats');
        };

        $scope.isUserLogedIn = function() {
            var logedUser = userFactory.getLogedUser();

            if(logedUser) {
                return true;
            } else {
                return false;
            }
        };

        $scope.logoutUser = function()  {
            userFactory.logoutUser();
            $location.url('/cats');
        };


    };

    module.controller("userController", userController);

}(angular.module("app")));*/
