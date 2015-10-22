angular.module('app').service('dogService', function ($q, $http) {
    this.getDogs = function () {
        var deferred = $q.defer();

        $http.get('/dogs')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
            });
        return deferred.promise;
    };

    this.postDog = function (data) {
        var deferred = $q.defer();

        $http.post('/dogs', data)
            .then(function () {
                deferred.resolve('data added');
            }, function () {
                deferred.reject('error');
            });
        return deferred.promise;
    };

    this.editDog = function (data) {
        var deferred = $q.defer();

        $http.put('/dogs/:id', data)
            .then(function () {
                deferred.resolve('data updated');
            }, function () {
                deferred.reject('error');
            });
        return deferred.promise;
    };

    this.getDog = function (id) {
        var deferred = $q.defer();

        $http.get('/dogs/{id}')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
            });
        return deferred.promise;
    };

    this.deleteDog = function (dogId) {
        return $http.delete('/dogs/' + dogId).then(function (data) {
            // Success
            console.log('Dog deleted');
        }, function () {
            // Error
            console.error("Something went wrong.");
        });
    }
});