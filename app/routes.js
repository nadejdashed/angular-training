(function(module) {
    module.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('intro', {
                url: "/",
                templateUrl: "app/templates/intro.html"
            })
            .state('cats', {
                url: "/cats",
                templateUrl: "app/templates/catsList.html",
                controller: 'mainController'
            })
            .state('cats.cat', {
                url: "/:id",
                templateUrl: "app/templates/cats.html",
                resolve: {
                    getCats: function($q, catService){
                        // var deferred = $q.defer();
                        // deferred.resolve(catService.queryCat());
                        // return deferred.promise;

                        return catService.queryCat();
                    }
                },
                controller: function($scope, $stateParams, getCats) {
                    var cat = getCats[$stateParams.id];
                    console.log('getCats ---->', getCats);

                    if (cat) {
                        $scope.$parent.showCat(cat);
                    }
                }
            })
            .state('about', {
                url: "/about",
                template: "<ul><li>Cats have been domesticated for around 4,000 years. While they were once valued for their hunting abilities, they are now valued for their companionship and loving behaviour.</li>" +
                    "<li>While not well known, the collective nouns used for cats and kittens are a clowder of cats and a kindle of kittens.</li>" +
                    "<li>Our domestic cats are known as little cats. They differ from large cats such as lions and tigers because they are naturally active at night and can purr.</li>" +
                    "<li>Cats are now the most popular pet in the UK and in the US. </li></ul>"
            })
            .state('404', {
                url: '/404',
                templateUrl: "app/templates/404.html"
            });

        $urlRouterProvider.otherwise("/404");

        // $locationProvider.html5Mode(true);
    });
}(angular.module("app")));