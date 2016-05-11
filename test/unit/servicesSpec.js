'use strict';

describe('service', function(){
	var $httpBackend,
		authService;
	
	beforeEach(module('eventsApp'));
	
	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
		
		$httpBackend.when('GET', '/auth').respond({user: null});
		$httpBackend.expectGET('/auth');
		authService = $injector.get('authService');
		$httpBackend.flush();
	}));
	
	afterEach(function(){
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	it('should true be true', function(){
		expect(true).toBe(true);
	});

	it('should send post on login', function(){
		$httpBackend.when('POST', '/login').respond({token:'111', user: {}});

		$httpBackend.expectPOST('/login');
		authService.login();
		$httpBackend.flush();
		
		expect(authService.getToken()).toBe('111');
	});
});


