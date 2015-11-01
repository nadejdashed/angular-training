(function(module) {

    var mainController = function ($scope, footballerService, footballers, permissionsService, $uibModal, $location) {
        $scope.selectFootballer = function (footballer) {
            $scope.selectedFootballer = footballer;
            footballer.visited = true;
        }
        $scope.someFunction = function() {
            console.log('This is some function!');
        }

        $scope.searchFootballer = function (searchValue) {
            $scope.searchName = searchValue;
        }
        $scope.isOwner = function (footballer) {
            return permissionsService.isOwner(footballer);
        }
        $scope.footballers = footballers;
        $scope.selectedFootballer = $scope.footballers[0];

        $scope.deleteItem = function(footballer) {
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/deleteWindow.html',
                controller: 'deleteWindowController',
                resolve: {
                    instance: function () {
                        return footballer;
                    }
                }
            });
            modalInstance.result.then(function (footballer) {
                footballerService.deleteData(footballer);
                var index = footballers.indexOf(footballer);
                footballers.splice(index, 1);
            }, function () {
                $location.path('/');
            });
        };


    };

    module.controller("mainController", mainController);

}(angular.module("app")));