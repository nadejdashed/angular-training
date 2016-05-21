angular.module("app").factory('profileService',['$cookies',
    // TODO check that only this service reads profile from localStorage. It helps if logic changes and you need to save information somewhere else
    // To do such way you need make some function in this service like function findProfile(username, password):object
    function($cookies){
        var saveProfile = function (profile, isValid) {
            if(isValid && profile.password1 === profile.password2){
                // TODO you can combine below lines in one 
                // var pNum = localStorage.getItem("profile.num") || 0;
                var pNum = localStorage.getItem("profile.num");
                if(!pNum){
                    pNum = 0;
                }

                // TODO 0 is false also
                // profile.id = profile.id ? profile.id : ++pNum;
                if(profile.id == undefined || profile.id === 0){
                    pNum++;
                    profile.id = pNum;
                }

                // TODO better to same one variable in localStorage than username, password, etc.
                // you can do it using JSON.stringify and then read using JSON.parse
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