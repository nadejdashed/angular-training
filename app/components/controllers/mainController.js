(function(module) {

    var mainController = function ($scope) {
    	$scope.cats = [{image:"cat.png", name:"cat", clickNumber:0}, {image:"cat2.png", name:"cat2", clickNumber:0}, {image:"cat3.png", name:"cat3", clickNumber:0}];
    	$scope.cat = {};

    	$scope.selectCat = function selectCat(cat)
    	{
    		$scope.cat = cat;
    	}

    	$scope.imgClick = function imgClick(cat)
    	{
    		$scope.cat.clickNumber ++;
    	}
    };

    module.controller("mainController", mainController);

}(angular.module("app")));

