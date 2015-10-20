(function (module) {

    var isUserActiveController = function ($scope, $cookies, userAuthorizationService) {

        var activeUser = userAuthorizationService.getActiveUser('userData');
        $scope.logoutButtonShow = userAuthorizationService.isUserActive(activeUser);
        if(activeUser !== null) $scope.activeUserLogin = activeUser.login;
    };

    module.controller("isUserActiveController", isUserActiveController);

}(angular.module("app")));