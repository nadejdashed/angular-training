angular.module('eventApp').controller('infoController', function($scope, profile){

	$scope.selectedEvents = profile.getSelectedEvents();

});