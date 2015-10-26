angular.module('eventApp').controller('mainController', function($scope, authService, permissionService, $state){

	$scope.isSelected = function(stateName){
		return $state.is(stateName);
	};

	$scope.logout = function($e){
		$e.preventDefault();

		authService.logout();
	};

	$scope.$watch(authService.getUser, function(val){
		$scope.canAdd = permissionService.checkAddPermission();
		$scope.isAuthenticated = !!val;
		console.log($scope.canAdd);
		console.log($scope.isAuthenticated);
	});

});