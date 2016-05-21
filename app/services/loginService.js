angular.module("app").factory('loginService',['$cookies',
    // TODO check that only this service reads logedIn from the cookies. It helps if logic changes and you need to save information somewhere else
    // To do such way you need use function isLoggedIn is all other places
    function($cookies){

        var isLoggedIn = function () {
            var isLoggedIn = false;
            var loginId = $cookies.get("logedIn");
            if(loginId > 0){
                isLoggedIn = true;
            }

            // TODO return (loginId > 0); It helps to escape unnecessary variable and conditions
            return isLoggedIn;
        };

        var loginTo = function (login) {
            var pNum = localStorage.getItem("profile.num");
            // TODO to escape this variable you could break the cycle
            var isLogin=false;
            // TODO to escape this variable you can use i from the cycle
            var loginId = -1;

            if(pNum != undefined){
                // TODO for(var i=1; i<=pNum && !isLogin;i++ ){
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