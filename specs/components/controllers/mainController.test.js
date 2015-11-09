describe('mainControllerTest', function(){
	var scope;

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		$controller('mainController', {$scope: scope});

		jasmine.clock().install();
	}));

	it('should change text in 1000 seconds', function(){
		expect(scope.text).toBe('Hello World!');

		scope.consoleLog();
		expect(scope.text).toBe('Hello AAAAAA!');

		/*jasmine.clock().tick(1001);
		scope.$digest();
		expect(scope.text).toBe('Hello AAAAAA!');*/
	});

});