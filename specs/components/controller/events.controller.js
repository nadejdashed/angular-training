describe('eventsControllerTest', function(){
	var $scope;

	beforeEach(module('eventApp'));
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		eventsController = $controller('eventsController', {
			$scope: $scope,
			loadedEvents: [{name: 'test'}]
		});
	}));

	it('should be positive smile', function(){
		expect($scope.submittedFilter).toEqual(undefined);

		$scope.filter = 'test';
		expect($scope.submittedFilter).not.toEqual('test');
		$scope.submitFilter();
		expect($scope.submittedFilter).toEqual('test');

		$scope.filter = 'a';
		expect($scope.submittedFilter).not.toEqual('a');
		$scope.submitFilter();
		expect($scope.submittedFilter).toEqual('a');
	});

});