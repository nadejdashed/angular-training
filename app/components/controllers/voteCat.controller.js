(function(module) {

    var voteCatController = function ($scope, $cookies, $filter, catsService) {
        //var didSelectcatFunction = function (cat) {
        //    $scope.selectedCat = cat;
        //    cat.wasAlreadyViewed = true;
        //};

        function putCooke(cat) {
            var votedCats = $cookies.getObject("votedCats");
            if (!votedCats) {votedCats = [];}
            votedCats.push(cat.id);
            $cookies.putObject("votedCats", votedCats);
        }

        //catsService.getCatsPromise()
        //    .then(function(data){
        //        $scope.cats = data;
        //        didSelectcatFunction($scope.cats[0]);
        //    });

        $scope.isVoteAvailableForCat = function (cat){
            var votedCats = $cookies.getObject("votedCats");
            return cat && votedCats.indexOf(cat.id) > 0;
            //var filteredVotedCats = $filter("filter")(votedCats, {id:cat.id}, true);
            //return (filteredVotedCats.length>0) ? true : false;
        }

        $scope.voteUpForCat = function (cat) {
            cat.vote++;
            putCooke(cat);
        };

        $scope.voteDownForCat = function (cat) {
            cat.vote--;
            putCooke(cat);
        };

        //$scope.applyFilter = function (newFilterText) {
        //    $scope.filterText = newFilterText;
        //};

        //$scope.deleteCat = function (cat) {
        //    catsService.deleteCatPromise(cat)
        //        .then(function(cat){
        //            var index = $scope.cats.indexOf(cat);
        //            $scope.cats.splice(index, 1);
        //        });
        //};

        //$scope.didSelectCat = didSelectcatFunction;

    };

    module.controller("voteCatController", voteCatController);

}(angular.module("app")));