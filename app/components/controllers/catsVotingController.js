(function(module) {
    function getPositiveCat($scope) {
        var pCats = $scope.cats.filter(function(value){
            return value.vote>0;
        });
        if(pCats.length >0){
            $scope.firstPositiveCatName=pCats[0].name;
        }
        $scope.positiveCatCount=pCats.length;
    }

    var catController = function ($scope, catService, $cookies, votingService, $uibModal) {
        $scope.currentDate = new Date();
        var loginId = $cookies.get("logedIn");
        $scope.logedUserId = loginId;
        $scope.cats = catService.getCats();
        getPositiveCat($scope);
        $scope.selectCat = function (cat) {
            cat.wasDisplayed=true;
            $scope.selectedCat = cat;
            getPositiveCat($scope);
        };
        
        $scope.mySearch ={};
        $scope.filterByVotes = votingService.filterByVotes;
        $scope.searchByName = function (name) {
            var search = {};
            search.name=name;
            $scope.search =  search;

        };

        $scope.deleteCat = function (cat) {
            $uibModal.open(
                {
                    templateUrl:'myModalContent.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.catName = cat.name;
                        $scope.closeMW = function () {
                            $uibModalInstance.dismiss("cancel");
                        }

                        $scope.deleteCatOk = function () {
                            catService.deleteCat(cat.id);
                            $scope.cats = catService.getCats();
                            $uibModalInstance.close();
                        }
                    }
                }
            );
        };

        $scope.upVote = votingService.upVote;
    };
    module.controller("catsVotingController", catController);

}(angular.module("app")));