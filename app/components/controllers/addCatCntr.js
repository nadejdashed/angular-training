(function(module) {

    var catController = function ($scope, catsService, $state) {
        // unnecessary action to create empty fields. They will be created during ng-model directive execution  
        var newCat = {id:0,name:'',src:'',vote:0};
        $scope.cat = angular.copy(newCat);

        $scope.cancel = function(){
          $state.go('cats');

        }

        $scope.save = function(){
          catsService.setCat($scope.cat);
          $state.go('cats');
        }

    };

    module.controller("addCatCntr", catController);

}(angular.module("app")));