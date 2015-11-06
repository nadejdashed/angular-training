/**
 * Created by Pavlo_Oliinyk1 on 11/6/2015.

 * Convert all your pages to html templates.

 Add all the corresponding routes.

 Create a route that requires no template or controller, such as a “site version” page or simple

 “about” page.  (i.e. Use ‘template’ instead of ‘templateUrl’).

 Add a ‘resolve’ property of /cats and /cat/:id so that the page doesn’t load until the events

 have been loaded.

 */

angular.module("app")

    .config(function($stateProvider, $urlRouterProvider , $locationProvider){
        $locationProvider.html5Mode(true);

        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "viewA": {
                        template: "<h1>Welcome message</h1>"
                    }/*,
                    "index.emotionText": {
                        template: "<h1>index.emotionText</h1>"
                        //templateUrl: "/templates/textEmoticons.html"
                    }*/
                }
            })
            .state('route1', {
                url: "/main",
                templateUrl: "/templates/main.html",
                controller: 'mainController'

                /* views  create isolete controller, so need to resolve data*/

                /*views: {
                    "":{
                        templateUrl: "/templates/main.html",
                    },
                    "emotionText": {
                        //templateUrl: "/templates/textEmoticons.html"
                        template: "<h1>index.emotionText</h1>"
                    }
                },
                resolve: {
                    resolveList: function($stateParams ){
                        console.log('satteparams resolve', $stateParams)
                    }
                }*/
                }).state('route1.detail', {
                    url: "/detail",
                    templateUrl: "/templates/detailCat.html",
                    controller: function($scope){
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
            })
            .state('route2', {
                url: "/about",
                template: "<h1>about</h1>"

            })
    }

);
