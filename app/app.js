(function () {
    "use strict";
    angular.module("app", ["ui.router", "ngResource"])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/cats');
            $stateProvider
                .state('cats', {
                    url: '/cats',
                    templateUrl: 'templates/main.html'
                })
                .state('edit', {
                    url: '/edit',
                    templateUrl: 'templates/edit.html',
                    controller: 'editCatController'
                })
                .state('new', {
                    url: '/new',
                    templateUrl: 'templates/new.html',
                    controller: 'newCatController'
                });
        }
    )

})();
