(function (module) {
    var editController = function($scope, footballerService, footballer, $location) {
        $scope.new = footballer;
        $scope.saveFootballer = function (newFootballer) {
            footballerService.editData(newFootballer);
            $location.path('/');
        }
    };
    module.controller('editController',editController);
}(angular.module("app")));