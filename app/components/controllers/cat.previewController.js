(function(module) {

    var previewController = function ($scope, catsService, catt, $q, $state) {

        //catsService.get1cat($stateParams.id).then(function(resp){
        $scope.cat = catt;
        //});
        $scope.countClick = function(){
            $scope.cat.click_num++;
        }
        $scope.plusClick = function(){
            $scope.cat.click_num++;
            catsService.updateVote($scope.cat);
        }

        $scope.minusClick = function(){
            $scope.cat.click_num--;
            catsService.updateVote($scope.cat);
        }

        $scope.deleteClick = function(){
            catsService.removeCat($scope.cat).then(function(values){

                catsService.setNotValidData();
            });
        }

    };

    module.controller("previewController", previewController);

}(angular.module("app")));