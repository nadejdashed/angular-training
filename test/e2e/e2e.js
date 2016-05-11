'use strict';

describe('angularjs homepage', function () {
	
	beforeEach(function () {
		browser.get('http://localhost:8000/');
	});
	
	it('should have a title', function () {
		expect(browser.getTitle()).toEqual('Event Registration');
	});
	
	it('should redirect to login', function () {
		expect(browser.getCurrentUrl()).toContain('/login');
	});

	it('should redirect to login', function () {
		expect(browser.getCurrentUrl()).toContain('/login');
		
		element(by.id('login')).sendKeys('testName');
		element(by.model('user.password')).sendKeys('testPassword');

		element(by.css('.btn')).click();
		expect(browser.getCurrentUrl()).toContain('/login');
	});

	it('should redirect to login', function () {
		expect(browser.getCurrentUrl()).toContain('/login');

		element(by.id('login')).sendKeys('admin');
		element(by.model('user.password')).sendKeys('admin');

		element(by.css('.btn')).click();
		expect(browser.getCurrentUrl()).toContain('/events');
	});
	
});
