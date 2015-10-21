(function (module) {
    var userController = function($scope, userService, $location) {
        $scope.register = function(user) {
            userService.registerUser(user);
            $location.path('/');
        }
        $scope.login = function(user) {
            userService.loginUser(user);
            $location.path('/');
        }
    };
    module.controller('userController',userController);
}(angular.module("app")));