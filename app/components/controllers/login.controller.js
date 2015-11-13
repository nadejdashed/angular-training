angular.module("app").controller("loginController",
    function ($scope, $state, loginService) {

        $scope.signUpUser = function(userData){
            loginService.signUpUser(userData);
        };

        $scope.loginUser = function(userData){
            loginService.loginUser(userData)
                .then(function() {
                    //$scope.$emit;
                    //$state.go('^');
                });
        };
    }
);