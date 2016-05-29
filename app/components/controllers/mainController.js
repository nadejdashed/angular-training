(function (module) {

    var mainController = function ($scope, catSenderService) {
        catSenderService.provideCats();
        // TODO Why don't scope.cats fill  using catSenderService.provideCats()
        // we use mocks on the practice. Please see example https://github.com/nadejdashed/angular-training/blob/lecture-test/app/js/mock.js
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

        // TODO selectedCat could be cat object, in template it's possible to check if cat is selected (null is false, object is true)
        $scope.selectedCat = {display: false, cat: null};
        $scope.newCat = null;
        // TODO isFormVisible could be boolean, no other properties except display exist in object
        $scope.isFormVisible = {display: false};
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
            $scope.selectedCat.display = true;
            cat.isViewed = true;
        };

        $scope.filterCats = function(inputText) {
            $scope.searchString = inputText;
        };

        $scope.showForm = function() {
            "use strict";
            // TODO The empty fields can be skipped, ng-model will create them itself
            $scope.newCat = {"name": "",
                "src": "",
                "vote": 0,
                isViewed: false};
            $scope.isFormVisible.display = true;
        };

        $scope.addCat = function(cat) {
            "use strict";
            $scope.cats.push(cat);
            catSenderService.saveCats(cat);
            $scope.isFormVisible.display = false;
        };

        $scope.cancelEdit = function() {
            "use strict";
            $scope.newCat = null;
            $scope.isFormVisible.display = false;
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));