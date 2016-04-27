(function () {
    "use strict";
    var app= angular.module("app", ['ngResource','ngCookies','ui.router']);
    app.config(
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

    app.directive('myFocus', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element[0].focus();
            }
        };
    });

    app.directive('formSubmit', function ($document) {
        return function(scope, element, attrs) {
            var handler = function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.formSubmit);
                    });
                    event.preventDefault();
                }
            };
            $document.bind("keypress",handler);

            scope.$on('$destroy',function(){
                $document.off('keypress', handler);
            });
        };
    });

    app.directive('imagePreview', function () {
        return {
            restrict: 'E',
            templateUrl:"app/templates/addCatFields.html",
            scope:{
                myCat: '=catValue'
            }
        };
    });

    app.directive('voteSpinner', function () {
        return {
            restrict: 'E',
            templateUrl:"app/templates/voteSpinner.html"
        };
    });

})();
