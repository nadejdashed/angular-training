(function (module) {

    var mainController = function ($scope, $location, dogService, loginService, dogsResource, $uibModal) {

        dogsResource.getDogs().then(function (dogs) {
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

        $scope.deleteDog = function (dog) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/deleteModal.html',
                controller: 'deleteModal',
                resolve: {
                    item: function () {
                        return dog;
                    }
                }
            });

            modalInstance.result.then(function (dogToDel) {
                dogsResource.deleteDog(dogToDel).then(function () {
                    var index = $scope.dogs.indexOf(dogToDel);
                    $scope.dogs.splice(index, 1);
                });
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };

        $scope.ownerOptions = function (dog) {
            $scope.user = loginService.getUser();
            if (dog.owner && $scope.user.login == dog.owner) {
                return true;
            }
        };

        $scope.submittedFilter = {name: ""};
        $scope.setFilter = function (filterName) {
            $scope.submittedFilter = angular.copy(filterName);
        }


        $scope.goTo = function (url) {
            $location.path(url);
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));

