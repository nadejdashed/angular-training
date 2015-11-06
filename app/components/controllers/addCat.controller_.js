(function(module) {

    var addCatController = function ($scope, $state, catsService) {
        $scope.submit = function(cat) {
            catsService.addCatPromise(cat).then(function(cat) {
                $state.go('listView.vote', {id : cat.id});
            });
        };
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));