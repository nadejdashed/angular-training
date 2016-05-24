(function(module) {

  // TODO split controller to to catsController where will be functionality to cat list and catController where will be functionality only for one cat
  // Try to make components responsible only for one thing (view, directive)
    var catController = function ($scope, catsService, $state, cats) {
        $scope.cats = cats;
        $scope.order = 'desc';
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
          // TODO there is an issue. canVote function should receive the cat as a parameter 
          if($scope.canVote()) {
            cat.vote++;
            checkPositiveCats(cat);
            catsService.doVote(cat);
          }
        }

        $scope.downVote = function(cat){
          // TODO there is an issue. canVote function should receive the cat as a parameter
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

      // TODO remove it because it's already moved in the image-preview directive
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