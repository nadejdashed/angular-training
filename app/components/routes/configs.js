/**
 * Created by Mykhaylo_Tauzhniansk on 11/6/2015.
 */
angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('addcat', {
        url: '/add_cat',
        templateUrl: '/templates/template_add_cat.html',
        controller: 'addCatController',
    }).state('cats', {
        url: '/',
        templateUrl: '/templates/main_cats_page.html',
        controller: 'mainController',
        resolve: {
            cats: function($state, $stateParams, catsService){
                return catsService.allcats().then(function(values){
                    return values;
                })
            }
        }
    }).state('cats.preview', {
        url: 'edit/:id',
        templateUrl: '/templates/cat_image.html',
        controller: 'mainController',
        //resolve: {
        //    cat: function($state, $stateParams, eventsService){
        //        return eventsService.getEventById($stateParams.id);
        //    }
        //}
    });
});