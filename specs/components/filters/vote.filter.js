describe('voteReactionFilterTest', function(){
	var filter;

	beforeEach(module('eventApp'));
	beforeEach(inject(function(voteReactionFilter){
		filter = voteReactionFilter;
	}));

	it('should be positive smile', function(){
		var result = filter(10, 5, -5);
		expect(result).toBe('10 Wow!');
	});

	it('should be positive smile', function(){
		var result = filter(0, 5, -5);
		expect(result).toBe('0 ');
	});

	it('should be positive smile', function(){
		var result = filter(0, 5, 2);
		expect(result).toBe('0 Oops!');
	});

});