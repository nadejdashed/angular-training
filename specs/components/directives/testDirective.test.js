describe('testDirective', function(){
	var isolateScope,
		initialScope;

	beforeEach(module('app'));

	beforeEach(inject(function($compile, $rootScope, $templateCache){
		var element = '<div test-directive value2="tempValue2"></div>';
		initialScope = $rootScope.$new();
		initialScope.tempValue2 = {};

		$templateCache.put('/templates/test.html', '');

		element = $compile(element)(initialScope);
		initialScope.$digest();
		isolateScope = element.isolateScope();
	}));

	it('', function(){
		expect(isolateScope.text2).toBe('Child');
	});

});