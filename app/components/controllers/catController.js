(function(module) {

    var catController = function ($scope) {
    	
    	var vm = this;

    	vm.catList = catList;
    	vm.availableOptions = [
    		{
    			"value": "id",
    			"name": "By Id"
    		},
    		{
    			"value": "name",
    			"name": "By Name"
    		},
    		{
    			"value": "vote",
    			"name": "By Vote"
    		},
    		{
    			"value": "-wasDisplaied",
    			"name": "By viewed"
    		},
		];

		vm.tempCat = {
			"id": -1,
			"name": "",
			"src": "",
			"vote": 0,
			"display": false,
			"wasDisplaied": false
		}

    	vm.voteCat = function (catModel) {
			catModel.vote = catModel.vote + 1;
    	}

    	vm.showCat = function (catModel) {
    		catModel.display = !catModel.display;
    		if (catModel.display) {
    			catModel.wasDisplaied = true;
    		}
    	}

    	vm.searchCat = function () {
    		vm.searchCriteria = vm.inputSearch;
    	}

    	vm.openDialog = function () {

    	}
    };

    





    module.controller("catController", catController);

}(angular.module("app")));