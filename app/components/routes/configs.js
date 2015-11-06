/**
 * Created by Mykhaylo_Tauzhniansk on 11/6/2015.
 */
angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('catslist', {
        url: '/',
        views: {
            about: {
                template: 'About me page'
            },
            "": {
                templateUrl: '/templates/main_cats_page.html',
                controller: 'mainController',
                resolve: {
                    events: function(catsService){
                        return catsService.getData();
                    }
                }
            }
        }
    }).state('events.edit', {
        url: 'edit/:id',
        templateUrl: '/templates/edit.html',
        controller: 'editController',
        resolve: {
            cat: function($state, $stateParams, eventsService){
                return catsService.getEventById($stateParams.id);
            }
        }
    }).state('cats', {
        url: '/',
        templateUrl: '/templates/main_cats_page.html',
        controller: 'mainController'
    }).state('about', {
        url: '/aboutme',
        template: 'About me page'
    });
});