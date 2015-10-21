var module = angular.module('app');

module.service('catService', function ($q, $http, $filter, userService) {

    this.saveCatAfterEdit = function(catId, data){
        $http.put('/cats/' + catId, data).success(function(result) {
            console.log('success');
        }).error(function() {
            console.log("error");
        });
    };


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

    var catObjCreate = function(catName, catUrl){
        var date = new Date();
        var user = userService.getActiveUser();

        var data = {
            'name': catName,
            'link': catUrl,
            'clickCount': 0,
            'view': 0,
            'addCatTime': $filter('date')(new Date(),'dd-MMM-yyyy'),
            'creator': user && user.login
        };
        return data;
    };
    this.saveCat = function(catName, catUrl){
        this.pushCats(catObjCreate(catName, catUrl));
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
        $http.delete('/cats/'+ catId).success(function () {
            console.log('deleted');
        });
    };
});