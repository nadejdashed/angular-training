angular.module("app").controller("voteCatController",
    function ($scope, $cookies, $filter, catsService) {
        //$scope.selectedCat = selectedCat;

        $scope.isNotAvailableVoteForCat = function (cat) {
            return catsService.isNotAvailableVoteForCat(cat);
        };

        $scope.voteUpForCat = function (cat) {
            catsService.voteUpForCat(cat);
        };

        $scope.voteDownForCat = function (cat) {
            catsService.voteDownForCat(cat);
        };
    }
);