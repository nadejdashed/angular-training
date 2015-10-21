(function(module) {
  "use strict";

  module.factory('usersStorageService', function($localStorage, $cookies) {

    $localStorage.$default({
       lastId: 1,
       users: []
    });

    var dropUsers = function(){
      $localStorage.$reset();
    };

    var checkLogin = function(user) {
      var check = {};
      check.login = false;
      for (var i = 0; i < $localStorage.users.length; i++) {
        if ($localStorage.users[i].login === user.login) {
          user.id = $localStorage.users[i].id;
          check.login = true;
          check.id = i;
          break;
        }
      }
      return check;
    };

    var registerUser = function(user) {
      var canRegister = !checkLogin(user).login;
      if (canRegister) {
        user.id = $localStorage.lastId++;
        $localStorage.users.push(user);
        return user;
      } else {
        return {error: 'Login already in use, please select onother.'};
      }
    };

    var loginUser = function(user) {
      var checkUser = checkLogin(user);
      if (checkUser.login && user.password === $localStorage.users[checkUser.id].password) {
        $cookies.putObject('UserLogin', user);
        return user;
      } else {
        return {error: 'Wrong Login or Password.'};
      }
    };

    var getAllUsers = function() {
      return $localStorage.users;
    };

    var getLoginUser = function() {
      return $cookies.getObject('UserLogin');
    };

    var userLogout = function() {
      $cookies.remove('UserLogin');
    };

    return {
      dropUsers: dropUsers,
      registerUser: registerUser,
      loginUser: loginUser,
      getAllUsers: getAllUsers,
      getLoginUser: getLoginUser,
      userLogout: userLogout
    };
  });

}(angular.module("reg")));
