angular.module('app').factory('authInterceptorService', function($injector, $location, $q){
    return {
        request: function(config){
            var userService = $injector.get('userService');
            var token = userService.getToken();

            if (token){
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        responseError: function(response){
            if (response.status === 401 || response.status === 403){
                $location.url('/');
            }
            return $q.reject(response); // because waiting promise
        }
    }
});
