(function(module) {

    function getPositiveCat($scope) {
        var positiveCatName = "";

        var filterPositiveCat = function(value){
            return value.vote>0;
        }

        var pCats = $scope.cats.filter(filterPositiveCat);
        if(pCats.length >0){
            $scope.firstPositiveCatName=pCats[0].name;
        }
        $scope.positiveCatCount=pCats.length;
    }

    var catController = function ($scope) {
        var catsFromJson = parseJson("../../json/cats.json");
        $scope.cats=catsFromJson;
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
    };


    module.controller("catsVotingController", catController);

}(angular.module("app")));