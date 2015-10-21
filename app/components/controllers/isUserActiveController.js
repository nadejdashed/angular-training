(function (module) {

    var isUserActiveController = function ($scope, $cookies, userService) {

        var activeUser = userService.getActiveUser();
        $scope.logoutButtonShow = userService.isUserActive(activeUser);

        if(activeUser !== null) $scope.activeUserLogin = activeUser.login;

        $scope.logout = function(){
            userService.logout();
        }
    };

    module.controller("isUserActiveController", isUserActiveController);

}(angular.module("app")));