describe('userService', function(){
    var $httpBackend, $window, authService;

    beforeEach(module('app'));
    beforeEach(inject(function(_$httpBackend_, $injector){
        $httpBackend = $injector.get('$httpBackend');
        $window = $injector.get('$window');
        authService = $injector.get('userService');

        spyOn($window.localStorage, 'setItem');

        $httpBackend.whenGET('/auth').respond({token: '567'});
        $httpBackend.whenPOST('/auth').respond({token: '567'});
        $httpBackend.whenPOST('/register').respond();
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should send request to the server when user try to register', function(){
        authService.loginUser('login');
        $httpBackend.expectPOST('/auth', 'login');
        $httpBackend.flush();

        expect(authService.getToken()).toBe('567');
        expect($window.localStorage.setItem).toHaveBeenCalled();
    });
});