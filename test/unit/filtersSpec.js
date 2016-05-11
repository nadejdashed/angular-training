'use strict';

describe('durations', function(){
	var durationsFilter;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function($filter){
		durationsFilter = $filter('durations');
	}));

	it('filter', function(){
		expect(durationsFilter(2)).toBe('1 Hour');
	});
});



