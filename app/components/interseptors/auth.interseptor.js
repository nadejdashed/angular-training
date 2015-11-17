angular.module("app").factory("authInterceptor",
    function($q, $injector, userService) {
        return {
            request: function(config) {
                var token = userService.getToken();
                if (token) {
                    config.headers.Authorization = "Bearer " + token;
                }
                return config;
            },
            responseError: function(resp) {
                var  $state = $injector.get("$state");
                if (resp.status === 403 || resp.status === 401) {
                    userService.clearLoginWithToken();
                    $state.go("login");
                }
                return $q.reject(resp);
            }
        }
    }
);