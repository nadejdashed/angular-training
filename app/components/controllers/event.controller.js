angular.module('eventApp').controller('eventController', function($scope, profile, events, authService, permissionService) {
	$scope.selectEvent = function (event) {
		profile.selectEvent(event);
	};

	$scope.vote = function ($event, event, dif) {
		$event.stopPropagation();
		event.vote = event.vote + dif;
	};

	$scope.deleteEvent = function($e, event){
		$e.preventDefault();
		$e.stopPropagation();

		events.deleteEvent(event);
	};

	$scope.$watch(authService.getUser, function(){
		$scope.canEditAndDelete = permissionService.checkOwnership($scope.event.owner);
	});

});