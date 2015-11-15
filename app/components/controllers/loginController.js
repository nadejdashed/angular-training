/** loginController
 */

angular.module('app')
    .controller('loginController', function ($scope, authenticationSrv,$window,$location ) {
    $scope.userCurrent = $window.localStorage.getItem('user');

    $scope.login = function (user) {
        authenticationSrv.login(user);
        console.log('$scope.userCurrent',$scope.userCurrent );
        //$location.url('/cats');
        $window.location.reload(); //need to redraw view
    };

    $scope.register = function (newUser) {
        authenticationSrv.register(newUser);
    };

    $scope.logout = function (user) {
        $window.localStorage.removeItem('user');
        $scope.userCurrent = '';
    }

});
