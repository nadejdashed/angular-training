(function () {
    "use strict";
    var myApp = angular.module("app", ['ngResource', 'ngCookies','ui.router']);

    myApp.config(function($stateProvider, $urlRouterProvider) {
  		$urlRouterProvider.otherwise("/cats");

	  	$stateProvider
		    .state('cats', {
		      url: "/cats",
		      templateUrl: "/app/templates/cats.html",
		      resolve: {
		      	cats: function(catsService) {
							// TODO not necessary to write then here (it creates new unnecessary promise). Resolve section already work with promise
							// return catsService.getCats().$promise
		      		return catsService.getCats().$promise.then(function(data) {
            			return data;
	          		});
		      	}
		      },
		      controller: 'catCntr'
		    })
		   	.state('cats.details', {
		      url: "/:id",
		      templateUrl: "/app/templates/cat-details.html",
		      resolve: {
		      	cat: function(catsService, $stateParams) {
		      		return catsService.getCat($stateParams.id);
		      	}
		      
		      },
		      controller: function($scope, cat){
						// TODO add cat to scope and use it on the view
		      }
		    })
		    .state('addNewCat', {
		      url: "/newCat",
		      templateUrl: "/app/templates/add-cat.html"
		    })
		    .state('about', {
		      url: "/about",
		      template: "<div>About</div>"
		    });
	});

})();
