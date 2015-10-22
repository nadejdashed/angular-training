angular.module('eventApp').directive('voteSpinner', function(){
	return {
		template:
			'<button class="btn btn-default btn-sm" ng-click="vote($event, 1)"><i class="glyphicon glyphicon-arrow-up"></i></button>' +
			'<button class="btn btn-default btn-sm" ng-click="vote($event, -1)"><i class="glyphicon glyphicon-arrow-down"></i></button>',
		scope: {
			voteVal: '=voteSpinner',
			fnUpdate: '&'
		},
		controller: function($scope){
			$scope.vote = function ($event, dif) {
				$event.stopPropagation();

				$scope.voteVal = $scope.voteVal + dif;
				$scope.fnUpdate({vote: $scope.voteVal});
			};
		}
	};
});