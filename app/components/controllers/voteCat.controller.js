angular.module("app").controller("voteCatController",
    function ($scope, $cookies, $filter, catsService) {
        //$scope.selectedCat = selectedCat;

        $scope.isVoteAvailableForCat = function (cat) {
            return catsService.isVoteAvailableForCat(cat);
        };

        $scope.voteUpForCat = function (cat) {
            catsService.voteUpForCat(cat);
        };

        $scope.voteDownForCat = function (cat) {
            catsService.voteDownForCat(cat);
        };
    }
);