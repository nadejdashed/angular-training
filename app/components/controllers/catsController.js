(function(module) {

    var catsController = function ($scope, catsService, $state) {
        $scope.text = "Hello World?";
        $scope.noClicks = 0;
        $scope.searchFilter = "";
        $scope.activeSearchFilter = "";
        
        /*$scope.cats = [
            {catImg: 'cat1.png', catName: 'zcat1', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat2.png', catName: 'fcat2', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat3.png', catName: 'cat3', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat4.png', catName: 'kcat4', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat5.png', catName: 'cat5', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat6.png', catName: 'cat6', noClicks: 0, votes: 0, visited: false}
        ];*/

        $scope.cats = catsService.getCats();

        //$scope.selectedCat = $scope.cats[0];

        $scope.selectCat = function (cat) {
            $scope.selectedCat = cat;
            cat.visited = true;
        };

        $scope.addVote = function (cat) {

            cat.votes++;
        }

        $scope.removeVote = function (cat) {

            cat.votes--;
        }
        
        $scope.setActiveSearchFilter = function(searchBy) {
            $scope.activeSearchFilter = searchBy;
        }

        $scope.setNewCatImgFinal = function(imgSrc) {

            
            $scope.newCatImgFinal = imgSrc;
        }

        $scope.addCat = function(catName, catImg) {
            var res = catsService.addCat(catName, catImg);
            console.log("add cat retur:" + res);
            /*res.then(function () {
                $state.go('cats');
            });*/
            $state.go('cats');
        }
    };

    module.controller("catsCtrl", catsController);

}(angular.module("app")));
