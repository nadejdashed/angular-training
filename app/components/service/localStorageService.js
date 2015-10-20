var module = angular.module('app');

module.service('localStorageService', function($window){

     this.set = function (login, jsonUserData){
          $window.localStorage.setItem(login, jsonUserData);
     };

     this.get = function (login){
          return  JSON.parse($window.localStorage.getItem(login));
     };

});
