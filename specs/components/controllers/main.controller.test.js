describe('mainControllerTest', function() {
  var $scope,
    resourceService,
    permissionsService,
    languages;

  //beforeEach(module('app'));
  beforeEach(module('app', function($provide){
    $provide.value('permissionsService', {

    });
  }));

  beforeEach(inject(function($controller, $rootScope, $location, resourceService, permissionsService, $uibModal, $injector, $q) {
    $scope = $rootScope.$new();
    permissionsService = $injector.get('permissionsService');
    resourceService = $injector.get('resourceService');

    languages = spyOn(resourceService, 'getLanguages').and.returnValue($q.resolve([{name:'php'}, {name:'java'}]));

    mainController = $controller('mainController', {
      $scope: $scope
    });

  }));

  it('should load values to scope', function() {
    //$scope.languagesArray = resourceService.getLanguages();
    //expect(true).toBe(true);
    $scope.languagesArray = languages;
    //languages.and.returnValue([{name:'php'}, {name:'java'}]);
    $scope.$apply();
    expect($scope.languagesArray).toEqual([{name:'php'}, {name:'java'}]);

    expect($scope.query).toEqual(undefined);
		expect($scope.query).not.toEqual('php');
		$scope.searchByName('php');
		expect($scope.query).toEqual('php');

		expect($scope.query).not.toEqual('a');
		$scope.searchByName('a');
		expect($scope.query).toEqual('a');
  });

});
