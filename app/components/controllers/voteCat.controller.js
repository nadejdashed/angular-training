angular.module("app").controller("voteCatController",
    function ($scope, voteService) {
        //$scope.selectedCat = selectedCat;

        $scope.isCatVoted = function (cat) {
            return voteService.isCatVoted(cat);
        };

        $scope.voteUpForCat = function (cat) {
            voteService.voteUpForCat(cat);
        };

        $scope.voteDownForCat = function (cat) {
            voteService.voteDownForCat(cat);
        };
    }
);