'use strict';

angular.module('myApp')
.service('CatService', ['$resource', function($resource){
    var Cats = $resource('/cats', {}, {
        save: {
            url: '/cat',
            method: 'POST'
        }
    });


    this.getCats = function() {
        return Cats.query();
    };
    
    this.save = function (cat) {
        Cats.save(cat);
    }
}]);