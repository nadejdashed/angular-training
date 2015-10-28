angular.module('eventApp').controller('mainController', function($scope, authService, permissionService, $state){
	var vm = this;

	vm.isSelected = function(stateName){
		return $state.is(stateName);
	};

	vm.logout = function($e){
		$e.preventDefault();

		authService.logout();
	};

	$scope.$watch(authService.getUser, function(val){
		vm.canAdd = permissionService.checkAddPermission();
		vm.isAuthenticated = !!val;
		console.log(vm.canAdd);
		console.log(vm.isAuthenticated);
	});

});