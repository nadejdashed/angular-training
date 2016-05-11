'use strict';

describe('MainMenuController', function(){
	var scope, authService, $location, getUserSpy;
	
	beforeEach(module('eventsApp', function($provide){
		$provide.service('authService', function(){
			return {
				getUser: function(){},
				logout: function(){}
			};
		});
	}));
	
	beforeEach(inject(function($rootScope, $controller, $injector){
		authService = $injector.get('authService');
		getUserSpy =  spyOn(authService, 'getUser');
		spyOn(authService, 'logout');

		$location = $injector.get('$location');
		spyOn($location, 'url');
		
		scope = $rootScope.$new();
		$controller('MainMenuController', {$scope: scope});
	}));
	
	it('spy1', function(){
		getUserSpy.and.returnValue('myuser');
		scope.$digest();
		expect(scope.user).toBe('myuser');
	});

	it('spy2', function(){
		scope.logout();
		expect(authService.logout).toHaveBeenCalled();
		expect($location.url).toHaveBeenCalledWith('/');
	});
});

