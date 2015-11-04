/**
 * Created by Mykhaylo_Tauzhniansk on 11/4/2015.
 */
(function(module) {

    var AddCatController = function ($scope, catsService) {
        $scope.newcatname = 'default';
        $scope.newcaturl = 'default';

        $scope.addCatClick = function(){
            $scope.newCat ={cat_name:$scope.newcatname, link: $scope.newcaturl};
            catsService.addCat($scope.newCat);
        }
    };

    module.controller("addCatController", AddCatController);

}(angular.module("app")));