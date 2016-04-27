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

    var catController = function ($scope, catService, $cookies) {
        $scope.currentDate = new Date();
        getPositiveCat($scope);
        
        $scope.selectCat = function (cat) {
            cat.wasDisplayed=true;
            $scope.selectedCat = cat;
            getPositiveCat($scope);
        };
        $scope.mySearch ={};

        $scope.filterByVotes = function(prop, option){
            return function(item){
                if(option == undefined){
                    return true;
                }
                switch (option){
                    case "1": return item[prop]>0; break;
                    case "2": return item[prop]==0;break;
                    case "3": return item[prop]<0;break;
                    default: return true;break;
                }
            }
        }
        
        $scope.searchByName = function (name) {
            var search = {};
            search.name=name;
            $scope.search =  search;

        };

        $scope.positiveVote = function (cat) {
            var catId = "posvote" + cat.id;
            var value = $cookies.get(catId);
            if(value == undefined || value == false){
                cat.vote = cat.vote + 1;
                $cookies.put(catId, true);
            }

        }
    };
    module.controller("catsVotingController", catController);

}(angular.module("app")));