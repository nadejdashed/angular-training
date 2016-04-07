(function(module) {

    var catController = function ($scope, catsService) {
        $scope.cats = [];
        $scope.order = 'asc';
        $scope.positiveCats = [];

        var loadCats = function() {catsService.getCats().$promise.then(function(data) {
            $scope.cats = data;
            $scope.cats.forEach(function(item) {
              checkPositiveCats(item);
            });
          });
        }

        var checkPositiveCats = function(cat) {
          var index = $scope.positiveCats.indexOf(cat);
          if(index !== -1 && cat.vote <= 0) {
            $scope.positiveCats.splice(index,1);
          } else if(index === -1 && cat.vote > 0) {
            $scope.positiveCats.push(cat);
          }
        }

        $scope.selectCat = function(cat){
          cat.viewed = true;
          $scope.selectedCat = cat;
        }

        $scope.canVote = function(cat){
          return !catsService.isVoted(cat);
        }

        $scope.upVote = function(cat){
          if($scope.canVote()) {
            cat.vote++;
            checkPositiveCats(cat);
            catsService.doVote(cat);
          }
        }

        $scope.downVote = function(cat){
          if($scope.canVote()) {
            cat.vote--;
            checkPositiveCats(cat);
            catsService.doVote(cat);
          }
        }

        $scope.doSearch = function(){
          $scope.selectedCat = null;
          $scope.searchText = $scope.searchString;
        }

        $scope.$parent.$watch('main.editMode',function(newValue, oldValue) {
          if (newValue !== oldValue && !newValue) {
            loadCats();
          }
        });

        loadCats();
    };

    module.controller("catCntr", catController);

}(angular.module("app")));