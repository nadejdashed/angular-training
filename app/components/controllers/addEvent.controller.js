angular.module('eventApp').controller('addEventController', function($scope, $location, events){

	$scope.submit = function($event){
		$event.preventDefault();

		if ($scope.addEventForm.$valid){
			events.addEvent($scope.event);
		} else {
			console.log('invalid')
		}
	};

});