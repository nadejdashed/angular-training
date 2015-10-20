(function(module) {
    "use strict";

    module.factory('authService', function($http, $sessionStorage) {
    	var token = $sessionStorage.token;

    	console.log(token);

    	function register(data){
    		$http.post('/register', data).then(function(resp){
    			console.log(resp);
    		});
    	}

    	function login(data){
    		$http.post('/auth', data).then(function(resp){
    			console.log(resp);
    			token = resp.data.token;
          $sessionStorage.token = token;
          $sessionStorage.user = resp.data.user.login;
    			//$window.localStorage.setItem('token', token);
    		});
    	}

    	function logout(){
    		token = undefined;
        delete $sessionStorage.token;
        delete $sessionStorage.user;
    		//$window.localStorage.removeItem('token');
    	}

    	function getToken(){
    		return token;
    	}

      function getUser(){
    		return $sessionStorage.user;
    	}

    	return {
    		register: register,
    		login: login,
    		logout: logout,
    		getToken: getToken,
        getUser: getUser
    	};
  });

}(angular.module("app")));
