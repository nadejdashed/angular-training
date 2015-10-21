module.service('userService', function ($q, $http, localStorageService, $cookies) {
    var token = localStorageService.get('token');

    this.logout = function(){
        token = undefined;
        localStorageService.remove('token');
        $cookies.remove('userData');
    };

    this.login = function (user) {
        $http.post('/auth', user).then(function(resp){
            token = resp.data.token;

            localStorageService.set('token', token);
            $cookies.putObject('userData', resp.data.user);
        });
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

    this.isUserActive = function(){
        var activeUser = this.getActiveUser();
        return (activeUser ? true: false);
    };

    this.getActiveUser = function(){
        var cookie = $cookies.getObject('userData');
        
        return (cookie !== undefined ? cookie : null)
    };

    this.checkUserPermissions = function(user){
        var activeUser = this.getActiveUser();

        return (user === (activeUser && activeUser.login)? true: false);
    };
});