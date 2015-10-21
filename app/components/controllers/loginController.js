angular.module("app").controller('loginController', function($scope, authService, $location){

    $scope.register = function(user){
        authService.register(user);
        $location.url('/cats');
    };

    $scope.loginUser = function(user){
        authService.login(user);
        $location.url('/cats');
    };

    $scope.logoutUser = function(){
        authService.logout();
        $location.url('/cats');
    };

    $scope.isUserLogedIn = function() {
        var logedUser = authService.getLogedUser();

        if(logedUser) {
            return true;
        } else {
            return false;
        }
    };

});