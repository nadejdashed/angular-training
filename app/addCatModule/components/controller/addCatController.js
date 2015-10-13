(function(module) {

    var addCatController = function ($scope) {
        $scope.cat = [];
        $scope.showCat = 0;

        $scope.blur = function(){
                $scope.readyUrl = $scope.catUrl;
                $scope.showCat = 1;
        };

        $scope.saveCat = function(catName, catUrl){
            $scope.cat.push({'name': catName, 'link': catUrl, 'clickCount': 0, 'view': 0, 'raiting': ':|'});
            console.log( $scope.cat);
        };


    };
    module.controller("addCatController", addCatController);
}(angular.module("appAddCat")));