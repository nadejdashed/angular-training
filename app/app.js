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
