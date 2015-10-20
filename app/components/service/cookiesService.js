var module = angular.module('app');

module.service('cookiesService', function($cookies){

    this.setCookie = function (cookieName, data){
        return $cookies.put(cookieName, JSON.stringify(data));
    };

    this.getCookie = function (cookieName){
        var cookie = $cookies.get(cookieName);
        if(cookie !== undefined)
            return JSON.parse(cookie);
        else
            return null;
    };

    this.removeCookie = function (cookieName){
        return  $cookies.remove(cookieName);
    };

});
