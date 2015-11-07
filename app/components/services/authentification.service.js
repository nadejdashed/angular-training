(function(module) {

	module.factory("authService",function($http, userService){
		function registration(data){
			return $http.post('/register', data).then(function(){

			});
		}

		function login(data){
			return $http.post('/auth', data).then(function(response){
				var respToken = response.data.token;
				if (respToken){
					userService.setToken(respToken);
				}
			});
		}

		return {
			login: login,
			registration: registration
		}

	});

}(angular.module("app")));