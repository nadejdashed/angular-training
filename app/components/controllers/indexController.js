angular.module("app").controller('indexController',
    function($scope, userService) {
        $scope.login = userService.getLogin();
    }
);