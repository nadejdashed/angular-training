(function(module) {

    var mainController = function ($scope,$http) {
      $http.get('json/cats.json')
      .then(function(resp){
        $scope.cats = resp.data;
      });

      $scope.selectCat =function(cat) {
        $scope.selectedCat = cat;
        cat.viewed = true;
      };
      $scope.text = "Cats?";

      $scope.onSave = function() {

      }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));
