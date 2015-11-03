(function(module) {

	var eventController = function ($scope) {
		$scope.upVote = function(event){
			event.vote = event.vote ? event.vote + 1 : 1;
		};

		$scope.downVote = function(event){
			event.vote = event.vote ? event.vote - 1 : -1;
		};
	};

	module.controller("eventController", eventController);

}(angular.module("app")));