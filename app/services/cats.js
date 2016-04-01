'use strict';

angular.module('myApp')
.service('CatService', ['$http', function($http){
    
    this.getCats = function(a) {        
        return $http.get('/app/cats');
    }
}]);