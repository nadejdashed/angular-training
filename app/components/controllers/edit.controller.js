(function(module) {

	var editController = function ($scope, $stateParams, cat) {
		$scope.cat = cat;
	};

	module.controller("editController", editController);

}(angular.module("app")));