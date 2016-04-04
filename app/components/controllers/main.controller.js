(function(module) {

    var mainController = function ($scope, catService) {
        $scope.cats = [];

        catService.getCatsList()
        	.then(function(data) {
        		$scope.cats = data;
        	});
    };

    module.controller("mainController", mainController);

}(angular.module("app")));