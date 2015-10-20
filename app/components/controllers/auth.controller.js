angular.module('eventApp').controller('authController', function($scope, authService){

	$scope.register = function(user){
		authService.register(user);
	};

	$scope.login = function(user){
		authService.login(user);
	};

});