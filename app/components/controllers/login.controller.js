(function(module) {

	var loginController = function ($scope, authService, $state) {

		$scope.registration = function(user){
			authService.registration(user);
		};

		$scope.login = function(user){
			throw 'tst';
			authService.login(user).then(function(){
				debugger;
				$state
			});
		};

	};

	module.controller("loginController", loginController);

}(angular.module("app")));