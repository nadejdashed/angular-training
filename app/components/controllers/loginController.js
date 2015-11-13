/** autentificationController
 *
 */

angular.module('app').controller('loginController', function ($scope, autentificationSrv) {

    $scope.login = function (user) {
        autentificationSrv.login(user);
        //$location.url('/cats');
    };

    $scope.register = function (item) {

    };

});
