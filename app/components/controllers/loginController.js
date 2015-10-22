(function(module) {

   var loginCtrl = function($scope, loginService) {
       $scope.createUser = function (user) {
           loginService.registerUser(user);
       };

       $scope.loginUser = function (user) {
           loginService.loginUser(user);
       };

       $scope.logoutUser = function () {
           loginService.logout();
       }
   };

 module.controller('loginCtrl', loginCtrl);

})(angular.module('app'));