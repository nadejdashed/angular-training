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
		expect(elem.find('.ng-hide').length).toBe(0);
		isolateScope.toggleVisibility();
		expect(isolateScope.visible).toBe(false);
		scope.$digest();
		expect(elem.find('.ng-hide').length).toBe(1);
	});
});

describe('datePicker', function(){
	var scope, elem;

	beforeEach(module('templates'));
	beforeEach(module('eventsApp'));

	beforeEach(inject(function($compile, $rootScope, $templateCache){
		scope = $rootScope.$new();
		elem = '<date-picker></date-picker>';
		elem = $compile(elem)(scope);
		scope.$digest();
	}));

	it('filter', function(){
		expect(scope.calendar.year).toBe(2016);
	});
});