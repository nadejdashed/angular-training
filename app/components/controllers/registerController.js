(function(module) {
    "use strict";
    // usersStorageService
    var registerController = function ($scope, $location, authService) {

      $scope.cancel = function() {
        $location.path('/');
      };

      $scope.registerUser = function(newUser) {
        var user = {
          login: newUser.login,
          password: newUser.password,
          password2: newUser.password2,
          email: newUser.email
        };
        //var regUser = usersStorageService.registerUser(user);
        var regUser = authService.register(user);
        console.log(regUser);
        $location.path('/');
      };

      $scope.loginUser = function(logUser) {
        //var login = usersStorageService.loginUser(logUser);
        var login = authService.login(logUser);
        console.log(login);
        $location.path('/');
      };

      $scope.logout = function() {
        //usersStorageService.userLogout();
        authService.logout();
        console.log('Logout');
        $location.path('/');
      };

      $scope.showLg = true;

      $scope.showLoginTab = function() {
        $scope.showLg = !$scope.showLg;
      };

    };

    module.controller("registerController", registerController);

}(angular.module("reg")));
