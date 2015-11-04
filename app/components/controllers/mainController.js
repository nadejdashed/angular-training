(function(module) {

    var mainController = function ($scope, serverCommunication, $uibModal) {
        $scope.allCats =[];

        /*Resource try*/
        function initCatsResource() {
            var deffered = serverCommunication.getDataResource()
        };

        function initCatsHttp() {
            var deffered = serverCommunication.getDataHttp();

            deffered.then(
                function(resp){
                    $scope.allCats = resp.data;
                    console.log('data',resp);
                },
                function(reject){Error(reject);},
                function(progressCallback){
                    console.log('progressCallback',progressCallback);
                }
            );

        }
        function Error(reject) {
            console.warn('Error', reject)
        }

        $scope.currentCat ={
                name: '',
                img:'',
                clicks: 0};

        $scope.counterTotal = 0;

        $scope.filterBy = { selectedOption: null,
                        sortingByText: ''}

        $scope.addCounterPicture = function(pet){
            pet.clicks++;
            $scope.currentCat = pet;
            $scope.counterTotal++;

        };

        $scope.decreaseCounterPicture = function(pet) {
            pet.clicks--;
            $scope.currentCat = pet;
            $scope.counterTotal--;
        }

        $scope.removeCounterCat = function(pet){
            //
            var modalInstance;
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/deleteCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    itemToDelete: function () {
                        console.info('inside itemToDelete: pet', pet);
                        return pet;
                    },
                    items: function () {
                        return pet;
                    },
                    fnDelete: function () {
                        //This DELETE all cats
                        var deffered = serverCommunication.removeItemHttp(pet);
                        deffered.then(function (resp) {
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

                            }
                        );
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
            $scope.filterBy.filtering = { name: searchStringVal};
            console.group()
                console.info('string',searchStringVal, '\n$scope.sort  click', $scope.filterBy.selectedOption)
            console.groupEnd();

        };


        initCatsHttp();

    };

    module.controller("mainController", mainController);




    /**/
    var emoticoneController = function () {
        this.text = "Lotus :smile: eleates vix attrahendams luna est.Advenas mori!Fermiums prarere in cubiculum!Cum cacula cantare, omnes stellaesmanifestum azureus, nobilis https://angularjs.org/ acipenseres.Cum orgiamori, omnes rationees <3 experientia alter, regius :heart: mortemes.Devatiospersuadere, tanquam secundus spatii.Heu, barcas!Cedriums observare!A falsis,lacta talis imber. :P Cur eleates peregrinatione?";
    };
    module.controller("emoticoneController", emoticoneController);

    var myfilter = function () {
        return function () {

        }
    }

    module.filter("myfilter", myfilter);



    /**/
    /*formCtrl*/
    /**/
    var formController = function ($scope) {
        $scope.newCat ={
            name: '',
            img:'',
            clicks: 0};
    };

    module.controller("formController", formController);
    /**/


}(angular.module("app")));