angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider ) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('cats', {
        url: '/',
        templateUrl: '/templates/cats.html',
        controller: 'mainController',
        resolve: {
            cats: function (catsService) {
                return catsService.getCats();
            }
        }

    }).state('cats.preview', {

        url: 'cats/:id',
        templateUrl: '/templates/catPreview.html',
        controller: 'previewController',
        resolve: {
            cat: function ($state, $stateParams, catsService) {
                return catsService.getCatById($stateParams.id);
            }
        }

    }).state('cats.preview.edit', {
        url: '/edit',
        templateUrl: '/templates/catEditing.html',
        controller: 'editController',
        resolve: {
            editedCat: function ($state, $stateParams, catsService) {
                return catsService.getCatById($stateParams.id);
            }
        }
    }).state('adding', {
        url: '/addcat',
        templateUrl: '/templates/catAdding.html',
        controller: 'addNewCatController'
    }).state('about', {
        url: '/aboutme',
        template: 'I am learning Angular!'
    }).state('login', {
        url: '/login',
        templateUrl: '/templates/login.html',
        controller: 'loginController'
    });

});