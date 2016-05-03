eventsApp.factory('AuthInterceptor', function($q, $location, $window) {
    return {
        'request': function (config) {
            var token = $window.localStorage.getItem('token');
            config.headers = config.headers || {};
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        'responseError': function (response) {
            if (response.status === 401 || response.status === 403) {
                $location.path('/login');
            }
            return $q.reject(response);
        }
    }
});
