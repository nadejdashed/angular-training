angular.module('app').factory('loginService', function ($http, $window, $q, $location) {
    var token = $window.localStorage.getItem('token');

    function register(data) {
        $http.post('/register', data)
            .then(function (response) {
                console.log(response + ' ' + 'User saved');
                $location.url('/auth');
            }, function () {
                console.error('Something went wrong')
            });
    }

    function login(data) {
        $http.post('/auth', data).then(function (response) {
            console.log(response);
            token = response.data.token;
            $window.localStorage.setItem('token', token);
            $location.url('/');
        }, function () {
            console.error('Something went wrong');
        });
    }

    function getToken() {
        return token;
    }

    function logout() {
        token = undefined;
        $window.localStorage.removeItem('token');
    }

    return {
        loginUser: login,
        registerUser: register,
        logout: logout,
        getToken: getToken
    };
});