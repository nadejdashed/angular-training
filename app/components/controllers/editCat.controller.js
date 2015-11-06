(function(module) {

    var editCatController = function ($scope, $state, catsService) {
        $scope.submit = function(cat) {
            //catsService.addCatPromise(cat).then(function(cat) {
            //    $state.go('listView.vote', {id : cat.id});
            //});
        };
    };

    module.controller("editCatController", editCatController);

}(angular.module("app")));