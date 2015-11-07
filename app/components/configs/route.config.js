(function(module) {



    var routeConfig = function ($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state(
            "main",
            {
                url: '/',
                templateUrl: '/templates/main.html',
                controller: "mainController"
            }

        ).state("about", {
                url:"/about",
                template:"<div>This is about page</div>"
            }
        ).state("add",{
                url:"/addcat",
                templateUrl: "/templates/addcat.template.html",
                controller: "addCatController"

            }

        ).state("edit",{
                url:"/edit/:id/",
                templateUrl:"/templates/editcat.template.html",
                controller: "editCatController",
                resolve: {
                    cat: function($state,$stateParams,catService)
                    {
                        return catService.getCatByID($stateParams.id);
                    }
                }
            }
        );


    }
    module.config(routeConfig);

}(angular.module("app")));