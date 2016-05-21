(function(module) {

    // TODO remove unnecessary service dependency - $cookies
    var profileController = function ($scope, $cookies, profileService) {
        // TODO $scope.profile = profileService.getProfile() || {};
        var prof = profileService.getProfile();
        if(prof != null){
            $scope.profile = prof;
        }
        $scope.saveProfile = profileService.saveProfile;
        
    };
    module.controller("profileController", profileController);

}(angular.module("app")));