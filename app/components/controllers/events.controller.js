angular.module('eventApp').controller('eventsController', function($scope, events,  profile){

	events.getEvents().then(function(data){
		$scope.events = data;
	}, function(error){
		console.log(error);
	});

	$scope.selectedEvents = profile.getSelectedEvents();

	$scope.sort = 'name';
	$scope.submitFilter = function(){
		$scope.submittedFilter = angular.copy($scope.filter);
	};

});