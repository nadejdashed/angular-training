describe('authServiceTest', function(){
	var authService,
		$httpBackend,
		userService;

	beforeEach(module('app'));

	beforeEach(inject(function($injector){
		authService = $injector.get('authService');
		$httpBackend = $injector.get('$httpBackend');
		userService = $injector.get('userService');

		$httpBackend.whenPOST('/auth').respond({token: '12345'});

		spyOn(userService, 'setToken');
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should call backend on login', function(){
		authService.login('temp data');
		$httpBackend.expectPOST('/auth', 'temp data');
		$httpBackend.flush();
	});

	it('should save token on login if response success', function(){
		authService.login('temp data');
		$httpBackend.flush();

		expect(userService.setToken).toHaveBeenCalledWith('12345');

	});

});