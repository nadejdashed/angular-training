(function (module) {

    var mainController = function ($scope, dogService) {
        dogService.getDogs().then(function (dogs) {
            $scope.dogs = dogs;
        });
        $scope.showDog = function (dog) {
            $scope.selectedDog = dog;
            dog.view = true;
        };
        $scope.increaseClicks = function (dog) {
            dog.clicks++;
        };
        $scope.inc = function (selectedDog) {
            selectedDog.likes++;
        };

        $scope.dec = function (selectedDog) {
            selectedDog.likes--;
        };

        $scope.deleteDog = function (dogId) {
            dogService.deleteDog(dogId);
        }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));

