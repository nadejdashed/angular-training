(function(module) {

    var mainController = function ($scope, catsService, $q, cats, $state) {
        $scope.orderBySelected= null;
        $scope.cat = null;

        $scope.cats =  cats;

        $scope.$watch(catsService.getIsValid, function(newValue, oldValue){
            if(newValue === false){
                catsService.allcats().then(function(values) {
                    $scope.cats = values;
                });
            }
        })

        $scope.selectCat = function(cat){
            $scope.cat = cat;
            $scope.cat.is_viewed = true;
            $state.go('cats.preview', {id:$scope.cat.id});
        }

        $scope.searchClick = function(search){
            $scope.searchCat = {cat_name:search};
        }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));