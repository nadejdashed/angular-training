angular.module('eventApp').controller('changeEventController', function($scope, $location, $stateParams, events){

	var id = $stateParams.id;
	if (id) {
		$scope.event = events.getEvent(id);
	}

	$scope.submit = function($event){
		$event.preventDefault();

		if ($scope.addEventForm.$valid){
			events.saveEvent($scope.event).then(function(){
				$location.url('/');
			});
		} else {
			console.log('Add form invalid');
		}
	};

});