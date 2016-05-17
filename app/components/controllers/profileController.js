(function(module) {

    var profileController = function ($scope, $cookies, profileService) {
        var prof = profileService.getProfile();
        if(prof != null){
            $scope.profile = prof;
        }
        $scope.saveProfile = profileService.saveProfile;
        
    };
    module.controller("profileController", profileController);

}(angular.module("app")));