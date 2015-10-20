angular.module('eventApp').factory('authService', function($http, $window){
	var token = $window.localStorage.getItem('token'),
		user;

	$http.get('/auth').then(function(resp){
		user = resp.data.user;
	});

	function register(data){
		return $http.post('/register', data);
	}

	function login(data){
		return $http.post('/auth', data).then(function(resp){
			token = resp.data.token;
			user = resp.data.user;
			$window.localStorage.setItem('token', token);
		});
	}

	function logout(){
		token = undefined;
		user = null;
		$window.localStorage.removeItem('token');
	}

	function getToken(){
		return token;
	}

	function getUser(){
		return user;
	}

	return {
		register: register,
		login: login,
		logout: logout,
		getToken: getToken,
		getUser: getUser
	}
});