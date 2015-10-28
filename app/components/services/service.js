/*
angular.module("app").factory('catFactory', function($http) {
   var factory = {};
*/

/*
    factory.getListOfCats = function() {
        return [
            {name: 'Tom', counter: 1, src: 'https://pbs.twimg.com/media/CN4GOm8WwAAgqy8.jpg'},
            {name: 'Sam', counter: 1, src: 'https://pbs.twimg.com/media/COgpmugWwAAaIwM.jpg:thumb'},
            {name: 'Ted', counter: 1, src: 'https://pbs.twimg.com/media/COhS32EWsAAhedf.jpg'},
            {name: 'Samuel', counter: 1, src: 'https://pbs.twimg.com/media/COgpmugWwAAaIwM.jpg'},
            {name: 'Samanta', counter: 1, src: 'https://pbs.twimg.com/media/COcyfkBUAAAdSAJ.jpg'}
        ];
    };
*/

/*
    factory.getListOfCats = function() {
        return $http.get('/cats').then(function(data) {
            return data.data;
        });
    };

    factory.getCatById = function(id) {
        return $http.get('/cats/' + id).then(function(data) {
            return data.data;
        });
    };

    factory.addCat = function(cat) {
        return $http.post('/cats', cat);
    };

    factory.editCat = function(cat) {
        return $http.put('/cats/' + cat.id, cat);
    };

    factory.deleteCat = function(cat) {
        return $http.delete('/cats/' + cat.id);
    };

    return factory;
});*/
