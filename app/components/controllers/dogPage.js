(function(module){

    var dogPageCtrl = function($scope, $routeParams, allDogs){
        console.log($routeParams.id);
        if($routeParams.id){
            $scope.dog = allDogs[$routeParams.id];
        }
    };

    module.controller("dogPageCtrl", dogPageCtrl);
})(angular.module('app'));