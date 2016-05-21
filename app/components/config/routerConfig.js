(function(module) {
    module.config(
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/about");

            $stateProvider.state('about',
                {url:'/about', template:'<h2>This is a Cat application.</h2><p>Enjoy)</p>'});

            $stateProvider.state('list',
                {
                    url:'/list',
                    templateUrl:'app/templates/catsVoting.html',
                    //TODO resolve function usually works with promises. In this case controller will wait while promise is resolved
                    resolve:{
                        allCats: function (catService) {
                            return catService.getCats().$promise;
                        }
                 },
                 controller:function ($scope, allCats) {
                 $scope.cats = allCats;
                 }
                }
            );

            $stateProvider.state('add',
                {
                    url:'/add',
                    templateUrl:'app/templates/addCat.html'
                }
            );

            // TODO I would like to set controller to template here. It helps use one template to different controllers
            $stateProvider.state('profile',
                {
                    url:'/profile',
                    templateUrl:'app/templates/profile.html'
                }
            );

            $stateProvider.state('login',
                {
                    url:'/login',
                    templateUrl:'app/templates/loginPage.html'
                }
            );

            $stateProvider.state('edit',
                {
                    url:'/edit/:id',
                    templateUrl:'app/templates/addCat.html',
                    resolve:{
                        selectedCat: function (catService, $stateParams) {
                            return catService.getCat($stateParams.id);
                        }
                    },
                    controller:function ($scope, selectedCat) {
                        $scope.cat = selectedCat;
                    }
                }
            );
        }
    );

}(angular.module("app")));