angular.module('eventApp').controller('eventsController', function($scope, events, loadedEvents, profile){

	$scope.events = loadedEvents;
	$scope.selectedEvents = profile.getSelectedEvents();

	$scope.sort = 'name';
	$scope.submitFilter = function(){
		$scope.submittedFilter = angular.copy($scope.filter);
	};

	function prepareData(events){
		var fields = ['name', 'trainer', 'vote'],
			result = [];

		for(var i=0; i<events.length; i++){
			result.push({
				name: events[i].name,
				trainer: events[i].trainer,
				vote: events[i].vote
			});
		}

		return result;
	}
	$scope.gridOptions = { data: prepareData($scope.events) };

});