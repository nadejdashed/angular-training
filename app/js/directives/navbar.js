(function (module) {

    var navbar = function () {
        return {
            templateUrl: "/templates/nav2.html"
        };
    };

    module.directive("navbar", navbar);

}(angular.module("ui")));
