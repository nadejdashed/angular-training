angular.module('app').directive('activeUser', function(userService) {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/authorizationAndRegistration/activeUser.html',
        scope: { },
        link: function($scope, element) {
            var activeUser = userService.getActiveUser();

            if(activeUser)$scope.activeUserLogin = activeUser.login;

            $scope.logoutButtonShow = userService.isUserActive(activeUser);

            $scope.logout = function(){
                userService.logout('userData');
                $scope.logoutButtonShow = false;
            };
        }
    };
});
