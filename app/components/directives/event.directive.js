angular.module('eventApp').directive('event', function(){
	return {
		templateUrl: '/templates/event.html',
		scope: {
			event: '=eventAttr'
		},
		controller: 'eventController'
	};
});