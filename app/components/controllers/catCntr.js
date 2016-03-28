(function(module) {

    var catController = function ($scope, $http) {
        $scope.cats = [];
        $scope.order = 'asc';
        $scope.mode = 'view';
        $scope.positiveCats = [];

        var checkPositiveCats = function(cat) {
          var index = $scope.positiveCats.indexOf(cat);
          if(index !== -1 && cat.vote <= 0) {
            $scope.positiveCats.splice(index,1);
          } else if(index === -1 && cat.vote > 0) {
            $scope.positiveCats.push(cat);
          }
        }

        $scope.selectCat = function(clickEvent,cat){
          cat.viewed = true;
          $scope.selectedCat = cat;
        }

        $scope.upVote = function(cat){
          cat.vote++;
          checkPositiveCats(cat);
        }

        $scope.downVote = function(cat){
          cat.vote--;
          checkPositiveCats(cat);
        }

        $scope.cancel = function(){
          $scope.mode = 'view';
          $scope.selectedCat = null;
        }

        $scope.save = function(cat){
          $scope.cats.push(cat);
          $scope.mode = 'view';
        }

        $scope.doEditCat = function(cat){
          $scope.selectedCat = {id:$scope.cats.length + 1,name:'',src:'',vote:0};
          $scope.mode = 'edit';
        }

        $scope.doSearch = function(){
          $scope.selectedCat = null;
          $scope.searchText = $scope.searchString;
        }

        $http.get('json/cats.json').
          success(function(data, status, headers, config) {
            $scope.cats = angular.fromJson(data);
            for(var index in $scope.cats) {
              checkPositiveCats($scope.cats[index]);
            }
            //$scope.selectedCat = $scope.cats[0];
          }).
          error(function(data, status, headers, config) {
            // log error
        });

    };

    module.controller("catCntr", catController);

}(angular.module("app")));