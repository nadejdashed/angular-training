angular.module('eventApp').controller('eventsController', function($scope, loadedEvents, profile){

	//events.getEvents().then(function(data){
		$scope.events = loadedEvents;
	/*}, function(error){
		console.log(error);
	});*/

	$scope.selectedEvents = profile.getSelectedEvents();

	$scope.sort = 'name';
	$scope.submitFilter = function(){
		$scope.submittedFilter = angular.copy($scope.filter);
	};

});