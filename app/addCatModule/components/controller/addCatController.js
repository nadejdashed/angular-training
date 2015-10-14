(function(module) {

    var addCatController = function ($scope) {
        $scope.cat = [];

        $scope.saveCat = function(){
            if($scope.catName !== undefined || $scope.catUrl !== undefined)
            {
                var date = new Date();
                $scope.cat.push({
                    'name': $scope.catName,
                    'link': $scope.catUrl,
                    'clickCount': 0,
                    'view': 0,
                    'addCatTime': date.getTime()
                });
                console.log($scope.cat);
            }
        };


    };
    module.controller("addCatController", addCatController);
}(angular.module("appAddCat")));