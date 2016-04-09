(function(module) {

    module.component("addCat", {
        templateUrl: "/app/templates/cat.html",
        controller: "addCatController",
        controllerAs: "addCat"
    });

}(angular.module("app")));