var module = angular.module('app');

module.service('catService', function ($q, $http) {

    this.getCatById = function (id) {
        var deferred = $q.defer();

        $http.get('/cats/' + id)
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
            });
        return deferred.promise;
    };

    this.getCats = function () {
        var deferred = $q.defer();

        $http.get('/cats')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
            });
        return deferred.promise;
    };

    this.pushCats = function (data) {
        var deferred = $q.defer();

        $http.post('/cats', data)
            .then(function () {
                deferred.resolve('data added');
            }, function () {
                deferred.reject('error');
            });
        return deferred.promise;
    };

    this.deleteCat = function (catId) {
        $http.delete('/cats/'+ catId, {params: {id: catId}}).success(function (data, status) {
            console.log('deleted');
        });
    };
});