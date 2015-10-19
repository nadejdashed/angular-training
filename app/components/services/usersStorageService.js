(function(module) {

  module.factory('usersStorageService', function($localStorage, $cookies) {
    $localStorage.$default({
       lastId: 1,
       users: []
    });

    var dropUsers = function(){
      $localStorage.$reset();
    };

    var registerUser = function(user) {
      var reg = true;
      for (var i = 0; i < $localStorage.users.length; i++) {
        if ($localStorage.users[i].login === user.login) {
          reg = false;
          break;
        }
      }
      if (reg) {
        user.id = $localStorage.lastId++;
        $localStorage.users.push(user);
        return user;
      } else {
        return false;
      }
    };

    var loginUser = function(user) {
      var login = false;
      for (var i = 0; i < $localStorage.users.length; i++) {
        if (user.login === $localStorage.users[i].login && user.password === $localStorage.users[i].password) {
          login = true;
          user.id = $localStorage.users[i].id;
          user.email = $localStorage.users[i].email;
          break;
        }
      }
      if (login) {
        if ($cookies.getObject('UserLogin').login !== user.login) {
          $cookies.putObject('UserLogin', user);
          return user;
        } else {
          return 'loged';
        }
      } else {
        return false;
      }
    };

    var getAllUsers = function() {
      return $localStorage.users;
    };

    return {
      dropUsers: dropUsers,
      registerUser: registerUser,
      loginUser: loginUser,
      getAllUsers: getAllUsers
    };
  });

}(angular.module("reg")));
