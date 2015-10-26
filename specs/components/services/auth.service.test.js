describe('authServiceTest', function() {
  var $httpBackend,
    authService,
    $sessionStorage;

  angular.module('ngStorage', []);
  angular.module('ngCookies', []);

  //beforeEach(module('app'));
  beforeEach(module('reg', function($provide){
    $provide.value('$sessionStorage', {

    });
  }));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    authService = $injector.get('authService');
    $sessionStorage = $injector.get('$sessionStorage');
    $httpBackend.whenPOST('/auth').respond({token: '123', user: {id: 10, login: 'yura', email: 'test@f.com'}});
    $httpBackend.whenPOST('/register').respond();
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should run if can register', function() {
    authService.register('test');
    $httpBackend.expectPOST('/register', 'test');
    $httpBackend.flush();
  });

  it('should run if can login', function() {
    authService.login('yura');
    $httpBackend.expectPOST('/auth', 'yura');
    $httpBackend.flush();

    expect(authService.getToken()).toBe('123');
    expect(authService.getUser()).toEqual({id: 10, login: 'yura', email: 'test@f.com'});
  });

  it('should run if can logout', function() {
    authService.logout();
    expect(authService.getToken()).toBe(undefined);
    expect(authService.getUser()).toEqual(undefined);
  });

});
