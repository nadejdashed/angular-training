(function(module) {

	var editController = function ($scope, $stateParams, cat, eventsService) {
		$scope.cat = cat;

		$scope.edit = function(cat){
			eventsService.editData(cat);
		}
	};

	module.controller("editController", editController);

}(angular.module("app")));