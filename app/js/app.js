'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngSanitize'])
	.config(function ($routeProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {

		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://www.aerlingus.com/html/cms/templates/cms-resrc-img/cms-resrc-img-banner.html'
		]);
			
		$routeProvider.when('/newEvent',
			{
				templateUrl: 'templates/NewEvent.html',
				controller: 'EditEventController'
			});
		$routeProvider.when('/events',
			{
				templateUrl: 'templates/EventList.html',
				controller: 'EventListController'
			});
		$routeProvider.when('/event/:eventId',
			{
				templateUrl: '/templates/EventDetails.html',
				controller: 'EventController',
				resolve: {
					event: function ($q, $route, eventData) {
						var deferred = $q.defer();
						eventData.getEvent($route.current.pathParams.eventId)
							.then(function (event) {
								deferred.resolve(event);
							});
						return deferred.promise;
					}
				}
			});
		$routeProvider.when('/login',
			{
				templateUrl: 'templates/Login.html',
				controller: 'LoginController'
			});
		$routeProvider.when('/sampleDirective',
			{
				templateUrl: 'templates/SampleDirective.html',
				controller: 'SampleDirectiveController'
			});
		$routeProvider.otherwise({redirectTo: '/events'});
		$locationProvider.html5Mode(true);

		$httpProvider.interceptors.push('AuthInterceptor');
	});


