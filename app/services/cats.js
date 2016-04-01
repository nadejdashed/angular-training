'use strict';

angular.module('myApp')
.service('CatService', ['$http', function($http){
    
    this.getCats = function(a) {        
        return $http.get('/cats');
    };
    
    this.save = function (cat) {
        $http.post('/cat', cat);
    }
}]);