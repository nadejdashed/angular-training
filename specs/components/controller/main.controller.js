describe('mainControllerTest', function(){
	var $scope, getUserSpy;

	beforeEach(module('eventApp', function($provide){
		$provide.value('authService', {
			getUser: function(){}
		});
	}));

	beforeEach(inject(function($controller, $rootScope, authService, permissionService, $injector){
		getUserSpy = spyOn(authService, 'getUser');
		permissionService = $injector.get('permissionService');
		spyOn(permissionService, 'checkAddPermission').and.returnValue(null);

		$scope = $rootScope.$new();
		$controller('mainController', {
			$scope: $scope,
			$state: {}
		});
	}));

	it('should watcher update', function(){

		expect($scope.canAdd).toEqual(undefined);
		expect($scope.isAuthenticated).toEqual(undefined);

		$scope.$apply();
		expect($scope.canAdd).toEqual(null);
		expect($scope.isAuthenticated).toEqual(false);

		permissionService.checkAddPermission.and.returnValue({ name: 'test' });
		getUserSpy.and.returnValue({ name: 'test' });
		$scope.$apply();
		expect($scope.canAdd).toEqual({ name: 'test' });
		expect($scope.isAuthenticated).toEqual(true);

	});

});