(function () {
    "use strict";
    angular.module("app", ["ngResource", 'ui.router'])

    .config(function($provide, $httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})();
