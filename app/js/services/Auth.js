eventsApp.factory('authService', function($http, $window, $q){
    var token = $window.localStorage.getItem('token'),
      user = null;

    $http.get('/auth').then(function(resp){
        user = resp.data.user;
    });
    
    function login(data){
        var defer = $q.defer();

        $http.post('/login', data).then(function(resp){
            if (resp.data.token){
                token = resp.data.token;
                user = resp.data.user;
                $window.localStorage.setItem('token', token);
                defer.resolve();
            } else {
                defer.reject();
            }           
        });

        return defer.promise;
    }

    function logout(){
        token = undefined;
        user = null;
        $window.localStorage.removeItem('token');
    }

    function getToken(){
        return token;
    }

    function getUser(){
        return user;
    }

    return {
        login: login,
        logout: logout,
        getToken: getToken,
        getUser: getUser
    }
});
