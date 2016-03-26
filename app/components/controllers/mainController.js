(function(module) {

    var mainController = function ($scope, $http) {
        $scope.text = "Hello World?";
        $scope.cats = [];

        $http.get('json/cats.json').success(function(resp) {
        	$scope.cats = resp;
        });
    };

    module.controller("mainController", mainController);

}(angular.module("app")));