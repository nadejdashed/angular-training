(function(module) {

    var mainController = function ($scope) {

        var cats = [{
            name: "Tom",
            imageURL: "http://stylonica.com/wp-content/uploads/2014/04/Cat-Wallpaper.jpg",
            clicksCount: 0,
            vote: 0,
            wasShowed: false
        }, {
            name: "Jeck",
            imageURL: "http://cdn.desktopwallpapers4.me/media/thumbs_400x250/3/27967.jpg",
            clicksCount: 0,
            vote: 0,
            wasShowed: false
        },{
            name: "Marry",
            imageURL: "http://www.adweek.com/files/imagecache/node-blog/blogs/cats_in_ads.jpg",
            clicksCount: 0,
            vote: 0,
            wasShowed: false
        },{
            name: "Lucy",
            imageURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgJ84aqXWsBA9MU47vxLNYUROLvzXtH6ekpYlv5QqT8hnCwnY7",
            clicksCount: 0,
            vote: 0,
            wasShowed: false
        },{
            name: "Met",
            imageURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGLomNwfcby5mZhAJR749tdHPo6dIGzk-WtK8h4y9Knsgisj5P",
            clicksCount: 0,
            vote: 0,
            wasShowed: false}];

        $scope.cats = cats;

        $scope.currentCat = cats[0];
        $scope.currentCat.wasShowed = true;


        $scope.selectCat = function (cat) {
            $scope.currentCat = cat;
            $scope.currentCat.wasShowed = true;
        }

        $scope.didClickedCat = function (cat) {
            cat.clicksCount ++;
        }

        $scope.increaseVote = function (cat) {

            cat.vote ++;
        }

        $scope.reduceVote = function (cat) {

            cat.vote = cat.vote > 0 ? cat.vote - 1 : 0;
        }

        $scope.searchCat = function (searchValue) {

            $scope.searchTerm = searchValue;
        }

        $scope.sortingOrders = [
            {name: "Sort by name", orderValue: "-name"},
            {name: "Sort by clicks count", orderValue: "-clicksCount"},
            {name: "Sort by vote", orderValue: "-vote"}];

        $scope.sortOrder = $scope.sortingOrders[0];
    };

    module.controller("mainController", mainController);

}(angular.module("app")));