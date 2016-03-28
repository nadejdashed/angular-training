(function (module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World?";
        $scope.cats = [{
            "id": 1,
            "name": "Alex",
            "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
            "vote": 0,
            isViewed: false
        }, {
            "id": 2,
            "name": "Viktor",
            "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
            "vote": 3,
            isViewed: false
        }, {
            "id": 3,
            "name": "Albert",
            "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
            "vote": 0,
            isViewed: false
        }, {
            "id": 4,
            "name": "Lia",
            "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
            "vote": 5,
            isViewed: false
        }];

        $scope.selectedCat = {display: false, cat: null};
        $scope.searchString = "";
        $scope.inputText = "";

        $scope.decreaseVoteForCat = function (cat) {
            if (cat.vote > 0) {
                cat.vote -= 1;
            }
        };

        $scope.increaseVoteForCat = function (cat) {
            cat.vote += 1;
        };

        $scope.showCat = function (cat) {
            $scope.selectedCat.cat = cat;
            $scope.selectedCat.display = true
            cat.isViewed = true;
        }

        $scope.filterCats = function(inputText) {
            $scope.searchString = inputText;
        }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));