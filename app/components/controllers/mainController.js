(function(module) {

    var mainController = function ($scope, $timeout) {
        $scope.text = "Hello World!";
        $timeout(function(){
            $scope.text = "Hello AAAAAA!";
        }, 1000);

        $scope.obj = {
            name: 'Parent controller'
        };

        $scope.consoleLog = function(){
            $scope.text = "Hello AAAAAA!";

            /*console.log($scope.obj.name);
            console.log($scope.obj.temp);*/
            $timeout(function(){
                /*console.log($scope.obj.name);*/
            }, 1000);
        };
        /*console.log('controller 1');*/
    };

    module.controller("mainController", mainController);

}(angular.module("app")));