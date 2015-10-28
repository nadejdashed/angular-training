angular.module('app').factory('dogsResource', function ($q, $http, $resource) {

    var dogResource = $resource('/dogs/:id', {id: '@id'}, {
        update: {method: 'PUT'}
    });

    var getDogs = function () {
        return dogResource.query().$promise;
    };

    var postDog = function (dog) {
        return dogResource.save(dog).$promise;
    };

    var getDog = function (dogId) {
        return dogResource.query(dogId);
    }

    var editDog = function (updatedDog) {
        return dogResource.update(updatedDog);
    };

    var deleteDog = function (dog) {
        return dog.$remove();
    };

    return {
        getDogs: getDogs,
        postDog: postDog,
        deleteDog: deleteDog,
        editDog: editDog,
        getDog: getDog
    };
});