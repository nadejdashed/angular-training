'use strict';

describe('collapsible', function(){
	var scope, elem, isolateScope;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function($compile, $rootScope){
		scope = $rootScope.$new();
		scope.text = 'TEMP title';
		elem = '<collapsible title="{{text}}"></collapsible>';
		elem = $compile(elem)(scope);
		isolateScope = elem.isolateScope();
	}));

	it('filter', function(){
		expect(isolateScope.visible).toBe(true);
		expect(isolateScope.title).toBe('TEMP title');

		scope.text = 'TEMP title2';
		scope.$digest();
		expect(isolateScope.title).toBe('TEMP title2');
	});

	it('filter', function(){
		expect(elem.find('div:visible').length).toBe(1);
		isolateScope.toggleVisibility();
		expect(isolateScope.visible).toBe(false);
		expect(elem.find('div:visible').length).toBe(0);
	});
});