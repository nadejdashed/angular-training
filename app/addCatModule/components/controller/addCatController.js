(function(module) {

    var addCatController = function ($scope, $filter) {
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
                    'addCatTime': $filter('date')(new Date(),'dd-MMM-yyyy')
                });
            }
        };


    };
    module.controller("addCatController", addCatController);
}(angular.module("appAddCat")));