(function(module){

    var addDogController = function ($scope, dogService) {
        $scope.addDog = function (dog) {
            console.log(dog);
            dogService.postDog(dog);
        };
    }
    module.controller("addDogController", addDogController);

}(angular.module('app')));