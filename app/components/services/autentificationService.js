
angular.module('app').service("autentificationSrv",  function($http, $templateCache, $timeout, $q){
    var token = $window.localStorage.getItem('token');
    console.log('get token:',token);

    function login (user){
        console.log('login...' + user);
        $http.post('/auth', data).then(function(resp){
                console.log("response : ", resp);
                token = resp.data.token;
                console.log("token : ", token);
                $window.localStorage.setItem('token', token);
                //$cookies.putObject('user', data);
            },function(reject){
                console.warn("Error response : ", reject);
        })
    }

    function register (user){
        console.log('register...' + user)
        //return $http.post('/user/', user);
    }

    return {
        login : login,
        register : register
    }
});
