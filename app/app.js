(function () {
    "use strict";
    angular.module("app", [
        "ngResource",
        'ngCookies',
        'ngMessages',
        'ui.router',
        'ui.bootstrap',
        'alertsModule'])
        .config(function($httpProvider) {
            $httpProvider.interceptors.push("authInterceptor");
        });
})();
