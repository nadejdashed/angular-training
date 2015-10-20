
module.service('userService', function ($q, $http) {

    this.getUser = function () {
        var deferred = $q.defer();

        $http.get('/auth')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
            });
        return deferred.promise;
    };

    this.createUser = function(user){
        var deferred = $q.defer();

        $http.post('/register', user)
            .then(function () {
                deferred.resolve('user added');
            }, function () {
                deferred.reject('error');
            });
        return deferred.promise;
    };

});