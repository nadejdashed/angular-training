(function(module) {

    var menuController = function ($scope, permissionsService, userService, $location) {
        $scope.isLoggedIn = function () {
            return permissionsService.loggedIn();
        }
        $scope.logout = function() {
            userService.logoutUser();
            $location.path('/');
        }

        $scope.$watch(permissionsService.loggedIn, function(val){
            $scope.isLogged = val;
        });
    };

    module.controller("menuController", menuController);

}(angular.module("app")));