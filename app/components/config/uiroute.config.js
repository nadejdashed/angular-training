angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/listView");

    $stateProvider.state('listView', {
        url: "/listView?{:id}",
        views: {
            "": {
                //url: "/:id",
                templateUrl: "/templates/listCats.html",
                controller: "listCatsController",
                resolve: {
                    selectedCat : function ($stateParams, catsService) {
                        if ($stateParams.id) {
                            return catsService.getCatPromiseById($stateParams.id);
                        } else {
                            return undefined;
                        }
                    }
                }
            },
            "voteCat@listView": {
                templateUrl: "/templates/voteCat.html",
                controller: "voteCatController"
            }
        }
    }).state("addCat", {
        url: "/add",
        onEnter: function($uibModal, $state) {
            var parentState = $state.current.name;
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/addCat.html',
                controller: 'addCatController'
            }).result
                .then(function(cat) {
                    $state.go(parentState, {id: cat.id});
                }, function() {
                    $state.go(parentState);
                });

        }
        //templateUrl: "/templates/addCat.html",
        //controller: "addCatController"
    }).state("editCat", {
        url: "/edit/:id",
        onEnter: function($uibModal, $state, $stateParams) {
            var parentState = $state.current.name;
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/editCat.html',
                controller: 'editCatController',
                resolve: {
                    cat: function (catsService) {
                        return catsService.getCatPromiseById($stateParams.id);
                    }
                }
            }).result
                .then(function() {
                    $state.go(parentState);
                }, function() {
                    $state.go(parentState);
                });

        }
    });
});