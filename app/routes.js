(function (module) {
    module.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("catsList", {
                url: "/catsList",
                template: "<cat-main></cat-main>"
            })
            .state("catsList.detail", {
                url: "/cat/:catId",
                // why not make catDetails a directive as well?
                templateUrl: "/app/templates/catDetail.html",
                controller: "catDetailsController",
                controllerAs: "detail",
                resolve: {
                    catsList : function(sharedCats) {
                        return sharedCats.getAll()
                    }
                }
            })
            .state("newCat", {
                url: "/newCat",
                template: "<add-cat></add-cat>"
            })
            .state("about", {
                url: "/about",
                template: "<b>About cats</b>"
            });

        $urlRouterProvider.otherwise("/catsList");
    });
}(angular.module("app")));