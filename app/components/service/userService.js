module.service('userService', function ($q, $http, localStorageService, cookiesService) {
    var token = localStorageService.get('token');
    var user = cookiesService.getCookie('userData');

    this.logout = function(){
        token = undefined;
        localStorageService.remove('token'); //@todo add removeItem into localStorageService
        cookiesService.removeCookie('userData');
    };

    this.login = function (user) {
        $http.post('/auth', user).then(function(resp){
            token = resp.data.token;

            localStorageService.set('token', token);
            cookiesService.setCookie('userData', resp.data.user);
        })
    };

    this.getToken = function(){
        return token;
    };

    this.getUser = function () {  // don't need for now
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