(function(module) {

    module.factory("authInterceptor",function($q, userService, $injector){
        return {
            request: function(config){
                var token = userService.getToken();
                if (token){
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            responseError: function(response){
                var $state = $injector.get('$state');
                if (response.status === 403 || response.status === 401){
                    $state.go('login');
                }
                return $q.reject(response);
            }
        };
    });

}(angular.module("app")));
