(function(module) {

    var mainController = function ($scope, catService, $cookies) {
        $scope.cats = [];

        catService.getCatsList()
        	.then(function(data) {
        		$scope.cats = data;

        		$scope.cats.forEach((cat, index, cats) => {
        			var catVoteCookie = $cookies.get(cat.id + '');

        			if(catVoteCookie) {
        				cats[index].vote = catVoteCookie;
        			}
        		});
        	});
    };

    module.controller("mainController", mainController);

}(angular.module("app")));