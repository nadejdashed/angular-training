(function(module) {

    var mainController = function ($scope, serverCommunication, $uibModal , errorHandler, $state) {

        $scope.allCats =[];

        /* load data using Resource */
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
                vote: 0};

        $scope.counterTotal = 0;

        $scope.filterBy = {
            selectedOption: 'id',
            sortingByText: ''
        };

        $scope.updateClicks = function(currentCat, voteInt){
            currentCat.vote = voteInt;
            console.log('vote click :' ,currentCat.name, '\t vote', voteInt);
        }

        function addCatLocal(pet){
            var promise = serverCommunication.createItemHttp(pet);
            promise.then(function (resp) {
                    console.log('addCatLocal:', pet, 'resp', resp);
                    $scope.allCats.push(resp.data);//update list
                },
                function (reject) {
                    errorHandler.connectionError(reject);
                }
            );
            return promise
        }

        $scope.addCat = function(pet){
            console.log('addCatLocal:  id', pet.id, 'add pet.timestamp', pet.time );
            var modalInstance;
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/addCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    // need for modalController
                    itemCurrent: function () {
                        pet.vote = 0; //set vote=0
                        console.info('inside itemToAdd: pet', pet);
                        return pet;
                    },
                    currentAction: function () {
                        return addCatLocal
                    }
                }
            });

            /*modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
                console.info('$scope.selected',$scope.selected);
                console.warn('****** $scope.allCats ********* should be Array here', $scope.allCats);
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
*/
        };

        function fnEditLocal(pet){
            var promise = serverCommunication.removeItemHttp(pet);
            promise.then(function (resp) {
                    //pet.time *= 1000;
                    console.log('cat updated id:', pet.id,'resp', resp);
                    //$scope.allCats.splice(-1,1); //update list
                },
                function (reject) {
                    errorHandler.connectionError(reject);
                },
                function (progress) {
                    console.info('progress: ', progress);
                }
            );
            return promise
        }

        $scope.editCat = function(pet){
            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/editCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    // need for modalController
                    itemCurrent: function () {
                        console.info('inside itemToDelete: pet', pet);
                        return pet;
                    },
                    currentAction: function () {
                        return fnEditLocal
                    }
                }
            });
        };

        function fnDeleteLocal(pet){
            var promise = serverCommunication.removeItemHttp(pet);
            promise.then(function (resp) {
                    pet.time *= 1000;
                    console.log('remove id', pet.id, 'pet.time',new Date().getDate(), 'resp', resp);
                    $scope.allCats.splice(-1,1); //update list
                },
                function (reject) {
                    errorHandler.connectionError(reject);
                },
                function (progress) {
                    console.info('progress: ', progress);
                }
            );
            return promise
        }

        $scope.removeCat = function(pet){
            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/deleteCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    // need for modalController
                    itemCurrent: function () {
                        console.info('inside itemToDelete: pet', pet);
                        return pet;
                    },
                    currentAction: function () {
                        return fnDeleteLocal
                    }
                }
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