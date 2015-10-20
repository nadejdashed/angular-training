"use strict";
angular.module("eventApp", ['ngCookies', 'ngResource', 'ui.router']).config(function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider){

	$locationProvider.hashPrefix('!');

	$urlRouterProvider.otherwise("/");

	$stateProvider.state('events', {
		url: '/',
		views: {
			info: {templateUrl: '/templates/info.html', controller: 'infoController'},
			'': {
				templateUrl: '/templates/events.html',
				controller: 'eventsController',
				resolve: {
					'loadedEvents': function(events){
						return events.getEvents();
					}
				}
			}
		}
	}).state('events.add', {
		url: '/event/new',
		templateUrl: '/templates/eventForm.html',
		controller: 'changeEventController'
	}).state('events.edit', {
		url: '/edit/:id',
		templateUrl: '/templates/eventForm.html',
		controller: 'changeEventController'
	}).state('login', {
		url: '/login',
		templateUrl: '/templates/login.html',
		controller: 'authController'
	}).state('register', {
		url: '/register',
		templateUrl: '/templates/register.html',
		controller: 'authController'
	});

	$httpProvider.interceptors.push('authInterceptor');

	/*$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: '/templates/events.html',
		controller: 'eventsController',
		resolve: {
			'loadedEvents': function(events){
				return events.getEvents();
			}
		}
	}).when('/addEvent/:id?', {
		templateUrl: '/templates/eventForm.html',
		controller: 'addEventController',
		resolve: {
			'loadedEvent': function(events, $route){
				var id = $route.current.params.id;
				return events.getEvent(id);
			}
		}
	}).when('/about', {
		template: '<h1>Event application v1.0</h1>'
	}).otherwise({
		redirectTo: '/'
	});*/

	/*$provide.decorator('ngClickDirective', [
		'$delegate', '$parse',
		function ($delegate, $parse) {

			$delegate[0].link = function(scope, element, attrs) {
				var fn = $parse(attrs.ngClick);
				element.on('click', function(event) {
					scope.$apply(function(){
						console.log('fuuuuuuuuuuuuuu');
						fn(scope, {$event: event});
					});
				});
			};

			return $delegate;
		}
	]);*/
});