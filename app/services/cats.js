'use strict';

angular.module('myApp')
.service('CatService', function(){
    this.getCats = function(a) {
        return [
            {
                name: 'Senior',
                image: 'img/grooming-needs-senior-cat.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Black',
                image: 'img/black.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Bengal',
                image: 'img/bengal.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Flash',
                image: 'img/flash.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Skull',
                image: 'img/skull.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Bread',
                image: 'img/breading.jpg',
                clicks: 0,
                wasSelected: false
            }
        ];
    }
});