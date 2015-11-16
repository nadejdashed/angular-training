angular.module("app").controller('indexController',
    function($scope, userService) {
        var updateLogin = function() {
            $scope.login = userService.getLogin();
        };

        $scope.$watch(
            function() {
                return userService.getLogin();
            },
            function(newValue, oldValue) {
                if(newValue !== oldValue ) {
                    updateLogin();
                }
            }
        );

        updateLogin();
    }
);