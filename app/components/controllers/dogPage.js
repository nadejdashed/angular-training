(function(module){

    var dogPageCtrl = function($scope, $routeParams, $location, allDogs, dogsResource){
        console.log($routeParams.id);
        if($routeParams.id){
            $scope.dog = allDogs.filter(function(dog) { return dog.id == $routeParams.id })[0];
        }

        $scope.editedForm = true;

        $scope.addDog = function (dog) {
            dogsResource.editDog(dog);
            $location.path('/');
        };
    };

    module.controller("dogPageCtrl", dogPageCtrl);
})(angular.module('app'));