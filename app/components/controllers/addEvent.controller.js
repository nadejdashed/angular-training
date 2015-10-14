angular.module('eventApp').controller('addEventController', function($scope){


	$scope.submit = function($event){
		$event.preventDefault();

		if ($scope.addEventForm.$valid){
			console.log('valid')
		} else {
			console.log('invalid')
		}
	};

	var i=0;
	while(i<10000000000){i++;}

});