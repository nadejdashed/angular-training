describe('myFilterTest', function(){
	var myFilter;

	beforeEach(module('app'));

	beforeEach(inject(function($filter){
		myFilter = $filter('myFilter');
	}));

	it('should show positive smile', function(){
		var result = myFilter(5, 0);
		expect(result).toBe(';)');
	});

	it('should show positive smile', function(){
		var result = myFilter(5, 6);
		expect(result).toBe(':|');
	});

});