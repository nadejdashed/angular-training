/**
 * Created by Ievgen_Budnikov on 11/6/2015.
 */
(function(module) {

    var routeConfig = function ($routeProvider) {
        $routeProvider
            .when('/', { controller: 'mainController', templateUrl: '/templates/main.html' } )
            .when('/addcat', { controller: 'catController', templateUrl: '/templates/editcat.html' } )
            .when('/cat/:id', { controller: 'catController', templateUrl: '/templates/editcat.html' })
            .otherwise( { redirectTo: '/' } );
    }

    module.config(routeConfig);

}(angular.module("app")));