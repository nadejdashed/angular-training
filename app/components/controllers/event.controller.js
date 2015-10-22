angular.module('eventApp').controller('eventController', function($scope, $uibModal, profile, events, authService, permissionService) {
	$scope.selectEvent = function (event) {
		profile.selectEvent(event);
	};

	$scope.saveEvent = function(event, val){
		event.vote = val;
		events.saveEvent(event);
	};

	$scope.deleteEvent = function($e, event){
		$e.preventDefault();
		$e.stopPropagation();

		var modalInstance = $uibModal.open({
			templateUrl: '/templates/modals/delete.html',
			controller: 'ModalDeleteCtrl',
			resolve: {
				item: function () {
					return event;
				}
			}
		});

		modalInstance.result.then(function () {
			events.deleteEvent(event);
		}, function () {
			console.log('canceled');
		});
	};

	$scope.$watch(authService.getUser, function(){
		$scope.canEditAndDelete = permissionService.checkOwnership($scope.event.owner);
	});

});