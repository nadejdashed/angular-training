angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider ){

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('events', {
		url: '/',
		views: {
			about: {
				template: 'About me page'
			},
			"": {
				templateUrl: '/templates/events.html',
				controller: 'eventsController',
				resolve: {
					events: function(eventsService){
						return eventsService.getData();
					}
				}
			}
		}
	}).state('events.edit', {
		url: 'edit/:id',
		templateUrl: '/templates/edit.html',
		controller: 'editController',
		resolve: {
			cat: function($state, $stateParams, eventsService){
				return eventsService.getEventById($stateParams.id);
			}
		}
	}).state('examples', {
		url: '/example',
		templateUrl: '/templates/example.html',
		controller: 'mainController'
	}).state('about', {
		url: '/aboutme',
		template: 'About me page'
	});

});