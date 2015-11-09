
angular.module("app").config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        controller: 'eventsController',
        templateUrl: '/templates/events.html',
        resolve: {
            events: function(eventsService, $q, $timeout){
                var defer = $q.defer();
                $timeout(function(){
                    eventsService.getData().then(function(data){
                        defer.resolve(data);
                    });
                }, 2000);
                return defer.promise;
            }
        }
    }).when('/example', {
        controller: 'mainController',
        templateUrl: '/templates/example.html'
    }).when('/about', {
        template: 'My about'
    }).otherwise({
        redirectTo: '/'
    });

});