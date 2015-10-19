angular.module('eventApp').controller('addEventController', function($scope, $location, events, $stateParams){

	console.log($stateParams);
	var id = $stateParams.id;
	if (id) {
		$scope.event = events.getEvent(id);
	}

	$scope.submit = function($event){
		$event.preventDefault();

		if ($scope.addEventForm.$valid){
			events.addEvent($scope.event);
		} else {
			console.log('invalid')
		}
	};

});