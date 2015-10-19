angular.module('eventApp').controller('addEventController', function($scope, $location, $stateParams, events){

	var id = $stateParams.id;
	if (id) {
		$scope.event = events.getEvent(id);
	}

	$scope.submit = function($event){
		$event.preventDefault();

		if ($scope.addEventForm.$valid){
			events.addEvent($scope.event).then(function(){
				$location.url('/');
			});
		} else {
			console.log('invalid');
		}
	};

});