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
                    resolve:{
                        allCats: function (catService) {
                            return {cats:catService.getCats()};
                        }
                 },
                 controller:function ($scope, allCats) {
                 $scope.cats = allCats.cats;
                 }
                }
            );

            $stateProvider.state('add',
                {
                    url:'/add',
                    templateUrl:'app/templates/addCat.html'
                }
            );

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