(function () {
    "use strict";
    angular.module("app", ["ui.router", "ngResource", "ngCookies"])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

            /*$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });*/

            $urlRouterProvider.otherwise('/cats');
            $stateProvider
                .state('cats', {
                    url: '/cats',
                    templateUrl: 'templates/main.html',
                    controller: 'mainController',
                    resolve: {
                        catData: function(catService){
                            return catService.getAllCats();
                        }
                    }
                })
                .state('edit', {
                    url: '/edit/:id',
                    templateUrl: 'templates/edit.html',
                    controller: 'editCatController',
                    resolve: {
                        catData: function(catService, $stateParams){
                            return catService.getCat($stateParams.id);
                        }
                    }
                })
                .state('new', {
                    url: '/new',
                    templateUrl: 'templates/new.html',
                    controller: 'newCatController'
                })
                .state('about', {
                    url: '/about',
                    template: '<div class="well row"><h1 style="text-align: center; color: #a1a1a1;">This SPA was created by monkey lover!</h1></div>'
                }).state('login', {
                    url: '/login',
                    templateUrl: '/templates/login.html',
                    controller: 'authenticationController'
                });

            $httpProvider.interceptors.push('authenticationInterceptor');

        }
    )
})();
