
/*
angular.module("app").factory('userFactory', function($window, $cookies){

    var userFactory = {};

    userFactory.registrateUser = function(user) {

        $window.localStorage.setItem("user", JSON.stringify(user));
*/


/*
        var createdUser = JSON.parse($window.localStorage.getItem('user'));
        alert('createdUser.name: ' + createdUser.name);
        alert('createdUser.password: ' + createdUser.password);
        alert('createdUser.email: ' + createdUser.email);
*/
/*
    };

    userFactory.loginUser = function(user) {
        var storedUser = JSON.parse($window.localStorage.getItem('user'));
        if(storedUser.name == user.name) {
            alert('user ' + user.name +' is loged in');
            $cookies.putObject('user', storedUser);
        } else {
            alert('user ' + user.name +' is not found');
        }
    };

    userFactory.logoutUser = function() {
        $cookies.remove('user');
        alert('user loged out')
    };

    userFactory.getLogedUser = function() {
        return $cookies.getObject('user');
    };

    return userFactory;

});
*/
