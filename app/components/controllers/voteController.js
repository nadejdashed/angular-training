(function (module) {

    var votesController = function($scope) {

        $scope.inc = function (item) {
            $scope.incVote();
        };

        $scope.dec = function (item) {
            $scope.decVote();
        };
    };

    module.controller("votesController", votesController);

}(angular.module("app")));