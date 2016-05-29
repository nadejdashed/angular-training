(function(module) {

    var mainController = function ($scope, catService, $cookies) {
        $scope.cats = [];

        catService.getCatsList()
        	.then(function(data) {
        		$scope.cats = data;
						
						// TODO votes should be taken and saved on the server
        		$scope.cats.forEach((cat, index, cats) => {
							// TODO make one service know that votes are saved in cookies. Now there are at least two places where cookies are used (here and cat.directive)
        			var catVoteCookie = $cookies.get(cat.id + '');

        			if(catVoteCookie) {
        				cats[index].vote = catVoteCookie;
        			}
        		});
        	});
    };

    module.controller("mainController", mainController);

}(angular.module("app")));