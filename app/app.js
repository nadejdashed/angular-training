"use strict";
angular.module("eventApp", ['ngCookies', 'ngResource', 'ui.router']).config(function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider){

	$locationProvider.hashPrefix('!');

	$urlRouterProvider.otherwise("/");

	$stateProvider.state('events', {
		url: '/',
		views: {
			info: {templateUrl: '/templates/info.html', controller: 'infoController'},
			events: {
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
		url: 'addEvent',
		templateUrl: '/templates/addEvent.html',
		controller: 'addEventController'
	}).state('events.edit', {
		url: 'edit/:id',
		templateUrl: '/templates/addEvent.html',
		controller: 'addEventController'
	}).state('login', {
		url: 'login',
		templateUrl: '/templates/login.html',
		controller: 'loginController'
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
		templateUrl: '/templates/addEvent.html',
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

	/*$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location) {
		return {
			'request': function (config) {
				config.headers = config.headers || {};
				if (token) {
					config.headers.Authorization = 'Bearer ' + $localStorage.token;
				}
				return config;
			},
			'responseError': function(response) {
				if(response.status === 401 || response.status === 403) {
					$location.path('/signin');
				}
				return $q.reject(response);
			}
		};
	}]);*/

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