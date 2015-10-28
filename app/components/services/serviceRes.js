/**
 * Created by vv on 22.10.2015.
 */
angular.module("app").factory('catFactory', function($resource) {
    var factory = {};

    var Cat = $resource('/cats/:id', {id: '@id'}, {
        update: {method:'PUT'}
    });

    factory.getListOfCats = function() {
        return Cat.query();
    };

    factory.getCatById = function(id) {
        return Cat.get({id : id})
    };

    factory.addCat = function(cat) {
        var promise;
        if (cat.id){
            promise = cat.$update();
        } else {
            promise = Cat.save(cat).$promise;
        }
        return promise;
    };

    factory.editCat = function(cat) {
        cat.$update;
    };

    factory.deleteCat = function(cat) {
        cat.$remove();
        return cat.$promise;
    };

    factory.counterInc = function(cat) {
        cat.counter++;
    };

    factory.counterDec = function(cat) {
        cat.counter--;
    };

    return factory;
});