(function(module) {

    var mainController = function ($scope, serverCommunication, $uibModal , errorHandler, $state) {

        $scope.allCats =[];

        /* try load data using Resource */
        function initCatsResource() {
            $scope.allCats = serverCommunication.getDataResource();
            //$scope.allCats.$promise.then(function(){});
            console.log('$scope.allCats: ',$scope.allCats);
        }

        /* try load data using Http */
        function initCatsHttp() {
            var deffered = serverCommunication.getDataHttp();

            deffered.then(
                function(resp){
                    $scope.allCats = resp.data;
                    //var time = new Date();
                    //console.log('***mainController data',resp , time.getSeconds());
                },
                function(reject){
                    errorHandler.connectionError(reject)
                },
                function(progressCallback){
                    console.log('progressCallback',progressCallback);
                }
            );
        }

        $scope.currentCat ={
                name: '',
                img:'',
                clicks: 0};

        $scope.counterTotal = 0;

        $scope.filterBy = {
            selectedOption: 'id',
            sortingByText: ''
        };

        $scope.updateClicks = function(currentCat, voteInt){
            currentCat.clicks = voteInt;
            console.log('update for cat:' ,currentCat, '\n clicks', voteInt);
        }

        $scope.addCat = function(pet){
            console.log('addCatLocal:  id', pet.id, 'add pet.timestamp', pet.time );
            function addCatLocal (){
                var promise = serverCommunication.createItemHttp(pet);
                promise.then(function (resp) {
                        console.log('addCatLocal:  id', pet.id, 'pet.time',pet.time, 'resp', resp);
                        //update list here
                        $scope.allCats = resp.data;
                        //update list here END
                    },
                    function (reject) {
                        Error(reject);
                    }
                );
                return promise
            }

            var modalInstance;
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/addCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    // need for modalController
                    itemToDelete: function () {
                        console.info('inside itemToAdd: pet', pet);
                        return pet;
                    },
                    currentAction: function () {
                        return addCatLocal
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
                console.info('$scope.selected',$scope.selected);
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });

        };

        $scope.removeCat = function(pet){
            //
            function fnDeleteLocal (){
                var promise = serverCommunication.removeItemHttp(pet);
                promise.then(function (resp) {
                            pet.time *= 1000;
                            console.log('remove id', pet.id, 'pet.time',pet.time, 'resp', resp);
                                //update list here
                                $scope.allCats = resp.data;
                                //update list here END
                        },
                        function (reject) {
                            Error(reject);
                        },
                        function (progress) {
                            console.info('progress: ', progress);
                        }
                    );
                return promise
            }

            var modalInstance;
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/deleteCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    // need for modalController
                    itemToDelete: function () {
                        console.info('inside itemToDelete: pet', pet);
                        return pet;
                    },
                    currentAction: function () {
                        return fnDeleteLocal
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
                console.info('$scope.selected',$scope.selected);
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });

        };

        $scope.sort = function(searchStringVal){
            $scope.filterBy.selectedOption = 'name';
            $scope.filterBy.sortingByText = { name: searchStringVal};
            console.group()
                console.info('serching string',searchStringVal, '\n sort after click. In field: ', $scope.filterBy.selectedOption)
            console.groupEnd();
        };


        initCatsHttp();

    };

    module.controller("mainController", mainController);

}(angular.module("app")));