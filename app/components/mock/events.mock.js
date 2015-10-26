angular.module('mockApp', ['ngMockE2E']).run(function($httpBackend){
	var events = {
		"responses": [{
			"id": 1,
			"name": "Angular Training",
			"src": "https://angularjs.org/img/AngularJS-large.png",
			"trainer": "Nadzeya Shedava",
			"date": 1444730682031,
			"vote": 0
		}, {
			"id": 2,
			"name": ".Net intro",
			"src": "https://upload.wikimedia.org/wikipedia/fr/9/99/Logo_microsoft_net.png",
			"trainer": "Egor Tichonov",
			"date": 1444730882031,
			"vote": 0
		}, {
			"id": 3,
			"name": "PHP in depth",
			"src": "http://uskov.com.ua/wp-content/uploads/2015/04/php-elephant.png",
			"trainer": "Alexandr Efimov",
			"date": "2015.09.15",
			"vote": 0
		}]
	};

	$httpBackend.whenGET('/events').respond(events);
	$httpBackend.whenPOST('/events').respond(function(method, url, data) {
		var event = angular.fromJson(data);
		events.push(event);
		return [200, event, {}];
	});

	$httpBackend.whenGET(/.html/).passThrough();
});


angular.module('eventApp').requires.push('mockApp');