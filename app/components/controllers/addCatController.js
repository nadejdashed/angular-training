(function(module) {

    var addCatController = function ($scope) {
        $scope.submit = function() {
            if ($scope.text) {
                $scope.list.push(this.text);
                $scope.text = '';
            }
        };
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));