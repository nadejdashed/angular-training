(function (module) {

    var loginCtrl = function ($scope, loginService, permissionService) {
        $scope.createUser = function (user) {
            loginService.registerUser(user);
        };

        $scope.loginUser = function (user) {
            loginService.loginUser(user);
        };

        $scope.logoutUser = function () {
            loginService.logout();
        };

        $scope.$watch(permissionService.canAdd, function (newCanAdd) {
                $scope.canAdd = newCanAdd;
        })
    };

    module.controller('loginCtrl', loginCtrl);

})(angular.module('app'));