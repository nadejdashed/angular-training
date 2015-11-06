angular.module("app").config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        controller: 'mainController',
        templateUrl: '/templates/main.html',
/*
        resolve: {
            events: function(catService, $q, $timeout){
                debugger;
                var defer = $q.defer();
                $timeout(function(){
                    catService.getCats().then(function(data){
                        defer.resolve(data);
                    });
                }, 2000);
                return defer.promise;
            }
        }
*/
    }).when('/add-cat', {
        controller: 'addCatController',
        templateUrl: '/templates/add-cat.html'
    }).when('/about', {
        template: 'My about'
    }).otherwise({
        redirectTo: '/'
    });

});