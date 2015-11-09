(function(module) {

    module.factory("authenticationInterceptor",function($q, tokenService, $injector, displayExceptionService){
        return {
            request: function(config){
                var token = tokenService.getToken();
                if (token){
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            responseError: function(response){
                var $state = $injector.get('$state');
                if (response.status === 403 || response.status === 401){
                    displayExceptionService.displayException(response.data.error);
                    $state.go('login');
                }
                return $q.reject(response);
            }
        };
    });

}(angular.module("app")));