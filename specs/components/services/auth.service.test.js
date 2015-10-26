describe('authServiceTest', function(){
	var $httpBackend, $window, authService;

	beforeEach(module('eventApp'));

	beforeEach(inject(function(_$httpBackend_, $injector){
		$httpBackend = $injector.get('$httpBackend');
		$window = $injector.get('$window');
		authService = $injector.get('authService');

		$httpBackend.whenGET('/auth').respond({user: {name: 'test'}});
		$httpBackend.whenPOST('/register').respond();

		spyOn($window.localStorage, 'setItem');
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should send request to the server when user try to register', function(){
		authService.register('test');
		$httpBackend.expectPOST('/register', 'test');
		$httpBackend.flush();
	});

	it('should send request to the server when user try to login and save token', function(){
		$httpBackend.whenPOST('/auth').respond({token: '123', user: {name: 'username'}});

		authService.login('login');
		$httpBackend.expectPOST('/auth', 'login');
		$httpBackend.flush();

		expect(authService.getToken()).toBe('123');
		expect(authService.getUser()).toEqual({name: 'username'});
		expect($window.localStorage.setItem).toHaveBeenCalledWith('token', '123');
	});

	xit('should send request to the server when user try to login and save token', function(){
		$httpBackend.whenPOST('/auth').respond({status: 'error'});

		authService.login('login');
		$httpBackend.expectPOST('/auth', 'login');
		$httpBackend.flush();

		expect(authService.getToken()).toBe(undefined);
		expect(authService.getUser()).toEqual(null);
		expect($window.localStorage.setItem).toHaveBeenCalled();
	});
});