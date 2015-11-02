(function(module) {

    var mainController = function ($scope) {
        $scope.cats = [
            {name: "Kitty", url: "http://i.bigmir.net/img/dnevnik/uploads/cmu_1153/29306/1.jpg", counter: 0},
            {name: "Pussy", url: "https://upload.wikimedia.org/wikipedia/uk/c/cf/Black-cat.jpg", counter: 0},
            {name: "Bella", url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/9942_4c1047ed74f3c_lg.jpg?itok=8VLsgv-X", counter: 0},
            {name: "Chloe", url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/18770_5096adaa3aca3_lg.jpg?itok=i9r4AAmg", counter: 0},
            {name: "Jaspr", url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw", counter: 0}
        ]

        $scope.incrementCounter = function(cat) {
            cat.counter++;
        }

        $scope.setCurrCat = function (cat) {
            $scope.currCat = cat;
        }

        $scope.currCat = $scope.cats[0];
    }

    module.controller("mainController", mainController);

}(angular.module("app")));