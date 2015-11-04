(function(module) {


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

    var mainController = function ($scope, serverCommunication, $uibModal) {
        /*$scope.images = [
            { name: 'stu',
              img:'http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg',
              clicks: 0},

            { name: 'dru',
              img:'http://www.factslides.com/imgs/black-cat.jpg',
              clicks: 0},

            {name: 'bru',
            img:'https://statswithcats.files.wordpress.com/2012/07/claws-cool-cat-picture-21-b.jpg',
            clicks: 0},

            { name: 'zoo',
              img:'http://media4.popsugar-assets.com/files/2014/09/19/978/n/1922507/4bc5042ee37fa1f9_thumb_temp_cover_file13465311411161397.xxxlarge/i/Funny-Cat-Costumes.jpg',
              clicks: 0},

            { name: 'hru',
              img:'http://www.andrew.cmu.edu/user/cfperron/cats/images/cat8.jpg',
              clicks: 0}];
*/
        function initCats() {
            $scope.allCats = serverCommunication.getData();
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

            //
            $scope.counterTotal++;
            //
        };

        $scope.decreaseCounterPicture = function(pet) {
            pet.clicks--;
            $scope.currentCat = pet;

            //
            $scope.counterTotal--;
            //
        }

        $scope.removeCounterPicture = function(pet){
            //
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'templates/addCat.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    itemToDelete: function () {
                        return pet;
                    },
                    items: function () {
                        return pet;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });

        };

        $scope.sort = function(searchStringVal){
            $scope.filterBy.selectedOption = 'name';
            $scope.filterBy.filtering = { name: searchStringVal};
            console.group()
                console.info('string',searchStringVal, '\n$scope.sort  click', $scope.filterBy.selectedOption)
            console.groupEnd();

        };


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


}(angular.module("app")));