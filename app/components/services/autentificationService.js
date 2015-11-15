angular.module('app').service("authenticationSrv",  function($http, $window, $templateCache, $timeout, $q){
    var token = $window.localStorage.getItem('token');
    console.log('get token:',token);

    function getToken (){
        return this.token;
    }

    function login (data){
        console.log('login...' + data);
        data.login = data.name;
        data.password = data.pass;
        data.password2 =data.repeatPass;
        $http.post('/auth', data).then(function(resp){
                token = resp.data.token;
                $window.localStorage.setItem('token', token);//override token
            if(token && token !== 'undefined') {
                $window.localStorage.setItem('user', data.name);//not render in view
            }else $window.localStorage.setItem('user', 'visitor');

                //setUser( data );//not render in view
                console.log("response : ", resp, "data" , data);
                console.log("token : ", token);
        },function(reject){
                console.warn("Error response : ", reject);
                $window.localStorage.setItem('user', 'reject via login servece');
        })
    }

    /**
     *
     * @param newUser -obj
     */
    function register (newUser){

        //console.log('newUser',  newUser );
        newUser.login = newUser.name;
        newUser.password = newUser.pass;
        newUser.password2 =newUser.repeatPass;
        for(var prop in newUser ){
            console.log("obj." + prop + " = " + newUser[prop]);
        }
        $http.post('/register', newUser).then(function(resp){
            console.log('resp', resp);
            console.log('get token:',token);
        });
    }

    /*var user ={};

     function getUser(){
     console.log("~~~getUser~~~ : ", user);
     return user;
     }
     function setUser (_user){
     user = _user;
     console.log("~~~setUser this.user : ", user);
     }*/

    return {
        login : login,
        register : register,
        getToken: getToken
        //getUser: getUser,
        //setUser: setUser
    }
});
