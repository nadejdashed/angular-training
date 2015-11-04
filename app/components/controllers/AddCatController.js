/**
 * Created by Mykhaylo_Tauzhniansk on 11/4/2015.
 */
(function(module) {

    var AddCatController = function ($scope, catsService, $window) {
        $scope.newcatname = 'Enter cat name';
        $scope.newcaturl = 'Enter cat url image';

        $scope.addCatClick = function(){
            $scope.newCat ={id:100, name:$scope.newcatname, src: $scope.newcaturl, vote: 0, owner: "Misha"};
            catsService.addCatClick($scope.newCat).then(function(response){
                console.log("Cat has been added!!");
                $window.history.back();
            });
        }
    };

    module.controller("addCatController", AddCatController);

}(angular.module("app")));