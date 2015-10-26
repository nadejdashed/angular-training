describe('homepage eventapp', function() {

	beforeEach(function(){
		browser.get('http://localhost:8000');
	});

	it('should show events', function() {
		var events = element.all(by.repeater('event in events'));
		expect(events.count()).toEqual(4);
	});

	it('should filter events by clicking on search button', function(){
		var events = element.all(by.repeater('event in events'));

		element(by.model('filter.name')).sendKeys('in d');
		expect(events.count()).toEqual(4);

		element(by.buttonText('Search')).click();
		expect(events.count()).toEqual(2);

		element(by.model('filter.name')).clear();
		expect(events.count()).toEqual(2);

		element(by.buttonText('Search')).click();
		expect(events.count()).toEqual(4);
	});
});