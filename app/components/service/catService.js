var module = angular.module('app');

module.service('catService', function ($q,  $filter, userService, $injector) {
    var resource = $injector.get('$resource');
    var Cats = resource('/cats/:id', {id: '@id'}, {
        update: {method:'PUT'}
    });

    this.getCats = function(){
        return Cats.query();
    };

    this.getCatById = function (id){
        return Cats.get({id: id});
    };

    this.editCat = function(cat)
    {
        cat.$update();
        return promise;
    };

    this.saveCat = function(cat){
        var catObj = catObjCreate(cat.name, cat.url),
            promise;
          promise = Cats.save(catObj, function(){});
        return promise;
    };


    this.deleteCat = function (cat){
        cat.$remove();
    };

    //this.saveCatAfterEdit = function(catId, data){
    //    $http.put('/cats/' + catId, data).success(function(result) {
    //        console.log('success');
    //    }).error(function() {
    //        console.log("error");
    //    });
    //};
    //
    //
    //this.getCatById = function (id) {
    //    var deferred = $q.defer();
    //
    //    $http.get('/cats/' + id)
    //        .then(function (response) {
    //            // promise is fulfilled
    //            deferred.resolve(response.data);
    //        }, function (response) {
    //            // the following line rejects the promise
    //            deferred.reject(response);
    //        });
    //    return deferred.promise;
    //};
    //
    //this.getCats = function () {
    //    var deferred = $q.defer();
    //
    //    $http.get('/cats')
    //        .then(function (response) {
    //            // promise is fulfilled
    //            deferred.resolve(response.data);
    //        }, function (response) {
    //            // the following line rejects the promise
    //            deferred.reject(response);
    //        });
    //    return deferred.promise;
    //};
    //
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
    //this.saveCat = function(catName, catUrl){
    //    this.pushCats(catObjCreate(catName, catUrl));
    //};
    //
    //this.pushCats = function (data) {
    //    var deferred = $q.defer();
    //
    //    $http.post('/cats', data)
    //        .then(function () {
    //            deferred.resolve('data added');
    //        }, function () {
    //            deferred.reject('error');
    //        });
    //    return deferred.promise;
    //};
    //
    //this.deleteCat = function (catId) {
    //    $http.delete('/cats/'+ catId).success(function () {
    //        console.log('deleted');
    //    });
 //   };
});
