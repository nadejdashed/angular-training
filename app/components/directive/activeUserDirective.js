angular.module('app').directive('activeUser', function(userService) {
    return {
        restrict: 'E',
        templateUrl: '/app/templates/authorizationAndRegistration/activeUser.html',
        scope: { },
        link: function($scope, element) {

            $scope.logout = function(){
                userService.logout('userData');
            };

            $scope.$watch(
                userService.getActiveUser, //chekatsa function
                function( activeUser ) {
                    $scope.activeUserLogin = activeUser && activeUser.login;
                    $scope.logoutButtonShow = userService.isUserActive();
                },
                true
            );
        }
    };
});
