angular.module('eventApp').factory('authService', function($http, $window, $q){
	var token = $window.localStorage.getItem('token'),
		user = null;

	$http.get('/auth').then(function(resp){
		user = resp.data.user;
	});

	function register(data){
		var defer = $q.defer();
		$http.post('/register', data).then(function(resp){
			defer.resolve();
		});
		return defer.promise;
	}

	function login(data){
		var defer = $q.defer();

		$http.post('/auth', data).then(function(resp){
			token = resp.data.token;
			user = resp.data.user;
			$window.localStorage.setItem('token', token);
			defer.resolve();
		});

		return defer.promise;
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