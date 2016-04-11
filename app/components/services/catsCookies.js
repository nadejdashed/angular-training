(function(module) {

    module.factory('CatsCookies', ['$cookies', function($cookies) {
        return $cookies;
    }]);

})(angular.module("app"));