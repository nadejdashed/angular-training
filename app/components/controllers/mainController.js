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

            { name: 'bro',
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

        $scope.incCounterPicture = function(_index){
            $scope.images[_index].clicks++;
            console.log('hit btn['+_index+']', $scope.counter);
            //
            $scope.counterTotal++;
            //
            $scope.currentCat = {
                name: $scope.images[_index].name,
                img: $scope.images[_index].img,
                clicks: $scope.images[_index].clicks};

            return $scope.images[_index].clicks;
        };
    };

    module.controller("mainController", mainController);

    /**/
    var mainControllerUseThis = function () {
        this.text = "Hello World!";
    };
    module.controller("mainControllerUseThis", mainControllerUseThis);
    /**/

}(angular.module("app")));