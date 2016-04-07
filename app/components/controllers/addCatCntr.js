(function(module) {

    var catController = function ($scope, catsService) {
        var newCat = {id:0,name:'',src:'',vote:0};
        $scope.cat = angular.copy(newCat);

        $scope.cancel = function(){
          $scope.cat = angular.copy(newCat);
        }

        $scope.save = function(){
          catsService.setCat($scope.cat);
          $scope.cat = angular.copy(newCat);
        }

    };

    module.controller("addCatCntr", catController);

}(angular.module("app")));