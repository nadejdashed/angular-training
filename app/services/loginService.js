angular.module("app").factory('loginService',['$cookies',
    function($cookies){

        var isLoggedIn = function () {
            var isLoggedIn = false;
            var loginId = $cookies.get("logedIn");
            if(loginId > 0){
                isLoggedIn = true;
            }

            return isLoggedIn;
        };

        var loginTo = function (login) {
            var pNum = localStorage.getItem("profile.num");
            var isLogin=false;
            var loginId = -1;

            if(pNum != undefined){
                for(var i=0; i<pNum && isLogin==false;i++ ){
                    var userName = localStorage.getItem("profile."+(i+1) + ".username");
                    if(userName === login.username){
                        var password = localStorage.getItem("profile."+(i+1) + ".password");
                        if(password === login.password){
                            isLogin=true;
                            loginId = i+1;
                            $cookies.put("logedIn", loginId);
                        }
                    }
                }
            }
        };

        return {
            name:"loginService",
            isLoggedIn:isLoggedIn,
            loginTo: loginTo

        };
    }]);