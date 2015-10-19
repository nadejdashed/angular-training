(function(module) {

    var registerController = function ($scope, usersStorageService, $cookies) {


      $scope.redirectHome = function() {
        window.location.href = "/";
        //console.log(localStorageService.getAllUsers());
      };

      $scope.registerUser = function(myuser) {
        var user = {
          login: myuser.login,
          password: myuser.password,
          email: myuser.email
        };
        var regUser = localStorageService.registerUser(user);

        if (regUser !== false) {
          console.log(regUser);
        } else {
          console.log("Login already exist");
        }
      };

      $scope.loginUser = function(logUser) {
        var checkLogin = localStorageService.loginUser(logUser);
        if (checkLogin === false) {
          console.log("Login or Password are WRONG!!");
        } else if (checkLogin === 'loged') {
          console.log("User already loged in");
        } else {
          console.log($cookies.getObject('UserLogin'));
        }
      };

      $scope.logout = function() {
        $cookies.remove('UserLogin');
        console.log($cookies.getObject('UserLogin'));
        //localStorageService.dropUsers();
      };

      $scope.showLg = true;
      $scope.showLoginTab = function() {
        $scope.showLg = !$scope.showLg;
        console.log($scope.showLg);
      };

      $scope.getUser = $cookies.getObject('UserLogin') | false;

    };

    module.controller("registerController", registerController);

}(angular.module("reg")));
