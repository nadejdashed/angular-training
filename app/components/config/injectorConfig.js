/**
 * Created by Pavlo_Oliinyk1 on 11/10/2015.
 */
angular.module("app")
    .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('tokenInjector');//add tokenInjector to $http service
}]);