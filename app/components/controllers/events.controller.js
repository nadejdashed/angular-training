angular.module('eventApp').controller('eventsController', function($scope, events, loadedEvents, profile){

	$scope.events = loadedEvents;
	$scope.selectedEvents = profile.getSelectedEvents();

	$scope.sort = 'name';
	$scope.submitFilter = function(){
		$scope.submittedFilter = angular.copy($scope.filter);
	};

});