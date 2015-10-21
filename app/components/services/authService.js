angular.module("app").factory('authService', function($http, $window, $cookies){

    var token = $window.localStorage.getItem('token');
    console.log(token);

    function register(data){
        $http.post('/register', data).then(function(resp){
            console.log(resp);
        })
    }

    function login(data){
        $http.post('/auth', data).then(function(resp){
            if(resp.data.status != 'error') {
                console.log("response : ", resp);
                token = resp.data.token;
                console.log("token : ", token);
                $window.localStorage.setItem('token', token);
                $cookies.putObject('user', data);
            }
        })
    }

    function logout(){
        token = undefined;
        $window.localStorage.removeItem('token');
        $cookies.remove('user');
    }

    function getToken(){
        return token;
    }

    function getLogedUser () {
        return $cookies.getObject('user');
    };


    return {
        register: register,
        login: login,
        logout: logout,
        getToken: getToken,
        getLogedUser: getLogedUser
    }

});