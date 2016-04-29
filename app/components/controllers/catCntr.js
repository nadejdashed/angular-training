(function(module) {

    var catController = function ($scope, catsService, $state, cats) {
        $scope.cats = cats;
        $scope.order = 'asc';
        $scope.positiveCats = [];

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
          $state.go('cats.details',{id: cat.id});
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

        $scope.addNewCat = function(){
              $state.go('addNewCat');
        };

        $scope.checkImage = function(){
              if($scope.cat.src) {
                var image = new Image();
                image.src = $scope.cat.src;
                return image.complete;
              }
              return false;
        };

        $scope.cats.forEach(function(item) {
          checkPositiveCats(item);
        });
    };

    module.controller("catCntr", catController);

}(angular.module("app")));