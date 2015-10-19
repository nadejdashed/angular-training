angular.module('eventApp').directive('event', function(profile){
	return {
		templateUrl: '/templates/main.html',
		scope: {
			event: '=eventAttr'
		},
		link: function($scope) {
			$scope.selectEvent = function (event) {
				profile.selectEvent(event);
			};

			$scope.vote = function ($event, event, dif) {
				$event.stopPropagation();
				event.vote = event.vote + dif;
			};
		}
	};
});