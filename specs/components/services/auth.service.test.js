describe('authServiceTest', function () {

    var $httpBackend;
    var loginService;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        loginService = $injector.get('loginService');
        $httpBackend.whenPOST('/auth').respond({ token: '123', user: {name: 'Bufan', password: '1234'}});
        $httpBackend.whenPOST('/register').respond();
        $httpBackend.whenGET('/auth').respond({ token: '123', user: {name: 'Bufan', password: '1234'}});


        $httpBackend.expectGET('/auth');
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should register', function(){
        loginService.registerUser('test');
        $httpBackend.expectPOST('/register', 'test');
        $httpBackend.flush();
    });

    it('should login', function(){
        loginService.loginUser('Bufan');
        $httpBackend.expectPOST('/auth', 'Bufan');

        $httpBackend.flush();

        expect(loginService.getToken()).toBe('123');
        expect(loginService.getUser()).toEqual({name: 'Bufan', password: '1234'});
    });

    it('should logout', function(){
        loginService.logout();
        expect(loginService.getToken()).toBe(undefined);
        expect(loginService.getUser()).toEqual({});
    })
});