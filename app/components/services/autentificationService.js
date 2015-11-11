/*
angular.module('app').service("autentificationSrv",  function($http, $templateCache, $timeout, $q){



    function login (user){
        console.log('login...' + user)
        return $http.get('/user', user);
    }

    function register (user){
        console.log('register...' + user)
        return $http.post('/user/', user);
    }

    return {
        login : login,
        register : register
    }
});
    */