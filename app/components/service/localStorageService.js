var module = angular.module('app');

module.service('localStorageService', function($window){

     this.set = function (login, jsonUserData){
          $window.localStorage.setItem(login, jsonUserData);
     };

     this.get = function (login){
          return  $window.localStorage.getItem(login);
     };

     this.remove = function(name){
          $window.localStorage.removeItem(name);
     };

});
