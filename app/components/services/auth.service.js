angular.module('eventApp').factory('authService', function($http, $window){
	var token = $window.localStorage.getItem('token');
	console.log(token);

	function register(data){
		$http.post('/register', data).then(function(resp){
			console.log(resp);
		})
	}

	function login(data){
		$http.post('/auth', data).then(function(resp){
			console.log(resp);
			token = resp.data.token;
			$window.localStorage.setItem('token', token);
		})
	}

	function logout(){
		token = undefined;
		$window.localStorage.removeItem('token');
	}

	function getToken(){
		return token;
	}

	return {
		register: register,
		login: login,
		logout: logout,
		getToken: getToken
	}
});