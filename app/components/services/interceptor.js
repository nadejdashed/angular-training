(angular.module('app').factory('authorizationInterceptor', function ($injector, $location, $q) {
    return {
        request: function (config) {
            var loginService = $injector.get('loginService');
            var token = loginService.getToken();

            if (token){
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        responceError: function (response) {
            if (response.status === 401 || response.status === 403) {
                $location.url('/');
            }
            return $q.reject(response);
        }
    }
}));