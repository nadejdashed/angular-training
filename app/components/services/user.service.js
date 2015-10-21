angular.module("app").factory('userService', function($q, $timeout, $http, $window) {
    var token = $window.localStorage.getItem('token');
    var user = JSON.parse($window.localStorage.getItem('user'));
    function registerUser(newUser) {
        var defer = $q.defer();
        $http.post('/register', newUser).then(function (data) {
            defer.resolve(data.data);
        });
        return defer.promise;
    }

    function loginUser(loginUser) {
        var defer = $q.defer();
        $http.post('/auth', loginUser).then(function(data){
            token = data.data.token;
            $window.localStorage.setItem('token', token);
            $window.localStorage.setItem('user', JSON.stringify(loginUser));
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    function getToken() {
        return token;
    }
    function getLoggedInUser() {
        return user;
    }
    function logoutUser() {
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('user');
    }
    return {
        registerUser: registerUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
        getToken: getToken,
        getLoggedInUser: getLoggedInUser
    };
})