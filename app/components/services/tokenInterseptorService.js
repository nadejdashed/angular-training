/**
 * Created by Pavlo_Oliinyk1 on 11/10/2015.
 */
angular.module('app').service('tokenInjector', function($location, $injector, $q) {

    //cookieStore = $injector.get('$cookieStore');
    //it throw error:  Unknown provider: $cookieStoreProvider <- $cookieStore <- tokenInjector <- $http <- $templateRequest <- $compile
/*
    var tokenInjector = {

        request: function (config) {
            config.headers = config.headers || {};

            if ($cookieStore.get('token')) {
                config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
            }
            return config;
        },

        // Intercept 401s and redirect login
        responseError: function(response) {
            if(response.status === 401) {
                $location.path('/login');
                // remove any stale tokens
                //$cookieStore.remove('token');
                return $q.reject(response);
            }
            else {
                return $q.reject(response);
            }
        }
    };*/
    var tokenInjector = {
        request: function(config){
            var authenticationSrv = $injector.get('authenticationSrv');
            var token = authenticationSrv.getToken();

            if (token){
                config.headers['authorization'] = '************Pasha ' + token;
            }
            return config;
        },
        responseError: function(response){
            if (response.status === 401 || response.status === 403){
                $location.url('/');
            }
            return $q.reject(response);
        }
    }

    return tokenInjector;
});
