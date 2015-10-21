(function(module) {

    var mainController = function ($scope, footballerService, footballers, permissionsService) {
        $scope.selectFootballer = function (footballer) {
            $scope.selectedFootballer = footballer;
            footballer.visited = true;
        }
        $scope.likeFootballer = function (footballer) {
            footballer.clicks++;
        }
        $scope.dislikeFootballer = function (footballer) {
            footballer.clicks--;
        }
        $scope.searchFootballer = function (searchValue) {
            $scope.searchName = searchValue;
        }
        $scope.deleteFootballer = function (footballerId) {
            footballerService.deleteData(footballerId);
        }
        $scope.isOwner = function (footballer) {
            return permissionsService.isOwner(footballer);
        }
        $scope.footballers = footballers;
        $scope.selectedFootballer = $scope.footballers[0];
    };

    module.controller("mainController", mainController);

}(angular.module("app")));