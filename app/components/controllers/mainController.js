(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!";
        $scope.images = [
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

        $scope.currentCat ={
            name: '',
            img:'',
            clicks: 0};

        $scope.counterTotal = 0;

        $scope.data = { singleSelect: null,
                        sortingByText: ''}

        $scope.addCounterPicture = function(pet){
            pet.clicks++;
            $scope.currentCat = pet;

            //
            $scope.counterTotal++;
            //
        };

        $scope.removeCounterPicture = function(pet){
            pet.clicks--;
            $scope.currentCat = pet;

            //
            $scope.counterTotal--;
            //
        };

        $scope.sort = function(searchStringVal){
            $scope.data.singleSelect = 'name';
            $scope.data.sortingByText = { name: searchStringVal};
            console.group()
            console.info('string',searchStringVal, '\n$scope.sort  click', $scope.data.singleSelect)
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