describe('userServiceTest', function() {
    var $httpBackend,
        userService,
        cookies,
        localStorageService;

    angular.module('ngStorage', []);

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function(_$httpBackend_,$injector) {
        $httpBackend = $injector.get('$httpBackend');
        userService = $injector.get('userService');
        cookies = $injector.get('$cookies');
        localStorageService = $injector.get('localStorageService');

        $httpBackend.whenPOST('/auth').respond({token: '123', user: {name: 'test'}});
        $httpBackend.whenPOST('/register').respond();
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should run if can register', function() {
        userService.createUser('test');
        $httpBackend.expectPOST('/register', 'test');
        $httpBackend.flush();
    });

    it('should run if can login', function() {
        userService.login('test');
        $httpBackend.expectPOST('/auth', 'test');
        $httpBackend.flush();
    });

    it('get token', function(){
        expect(userService.getToken()).toEqual('123');
    });

});
