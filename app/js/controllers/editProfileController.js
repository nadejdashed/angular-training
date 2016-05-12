
(function (module) {

    var editProfileController = function (user, $location) {
        this.user = user;

        this.submit = function () {
            $location.path("/results");
        };
    };

    module.controller("editProfileController", editProfileController);

}(angular.module("forms")));
