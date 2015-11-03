(function(module) {

    var mainController = function ($scope) {
    	$scope.cats = [{image:"cat1.png", name:"cat1", visited: "false"}, {image:"cat2.png", name:"cat2", visited: "false"}, {image:"cat3.png", name:"cat3", visited: "false"}, {image:"cat4.png", name:"cat4", visited: "false"}, {image:"cat5.png", name:"cat5", visited: "false"}];
    	$scope.cat = {};
    	$scope.showSpinner = false;
    	$scope.sortWay = false;

    	$scope.options = [{ name: "Straight", id: 0 }, { name: "Reverse", id: 1 }];
		$scope.option = {};
		$scope.selectedOption = $scope.options[0];

    	$scope.selectCat = function selectCat(cat)
    	{
    		$scope.cat = cat;
    		$scope.cat.viewed = true;
    		$scope.cat.checkmark = "\u2713";
    	}

    	$scope.doSearch = function doSearch()
    	{
    		$scope.tmpSearchVariable = $scope.inputSearch;
    		$scope.showSpinner = true;
    	}
    };

    module.controller("mainController", mainController);

}(angular.module("app")));

