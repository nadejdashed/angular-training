(function(module){

    var addDogController = function ($scope, dogsResource) {
        debugger;
        $scope.addDog = function (dog) {
            console.log(dog);
            dogsResource.postDog(dog);
        };
    };

    module.controller("addDogController", addDogController);

}(angular.module('app')));