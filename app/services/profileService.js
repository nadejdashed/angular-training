angular.module("app").factory('profileService',['$cookies',
    function($cookies){
        var saveProfile = function (profile, isValid) {
            if(isValid && profile.password1 === profile.password2){
                var pNum = localStorage.getItem("profile.num");
                if(!pNum){
                    pNum = 0;
                }

                if(profile.id == undefined || profile.id === 0){
                    pNum++;
                    profile.id = pNum;
                }

                localStorage.setItem("profile."+profile.id + ".username", profile.username);
                localStorage.setItem("profile."+profile.id + ".password", profile.password1);
                localStorage.setItem("profile."+profile.id + ".email", profile.email);
                localStorage.setItem("profile.num", pNum);
            }
        };

        var getProfile = function () {
            var loginId = $cookies.get("logedIn");
            var profile = null;
            if(loginId>0){
                var userName = localStorage.getItem("profile."+loginId + ".username");
                var email = localStorage.getItem("profile."+loginId + ".email");
                var votedFor = localStorage.getItem("profile."+loginId + ".voted");
                profile = {id:loginId, username: userName, email: email, voted: votedFor};
            }
            return profile;
        };
        
        return {
            name:"profileService",
            saveProfile:saveProfile,
            getProfile: getProfile

        };
    }]);