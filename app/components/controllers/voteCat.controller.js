angular.module("app").controller("voteCatController",
    function ($scope, voteService, catsFactoryService) {
        //$scope.selectedCat = selectedCat;

        $scope.voteUpForCat = function (cat) {
            voteService.voteUpForCat(cat);
        };

        $scope.voteDownForCat = function (cat) {
            voteService.voteDownForCat(cat);
        };
    }
);