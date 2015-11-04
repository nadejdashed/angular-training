(function(module) {

    var serverCommunication = function ($scope, $resource) {
        //$scope.DataBase  = $resource('/json/cats.json');
        $scope.DataBase = ['halo'];


        function getData ($scope){
            return $scope.DataBase;
        }

        return {
            getData : getData
        }

    };

    module.factory("serverCommunication", serverCommunication);

}(angular.module("app")));