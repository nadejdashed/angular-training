(function(module) {

    var mainController = function ($scope) {

        var cats = [{name: "Tom", imageURL: "http://stylonica.com/wp-content/uploads/2014/04/Cat-Wallpaper.jpg", clicksCount: 0},
            {name: "Jeck", imageURL: "http://cdn.desktopwallpapers4.me/media/thumbs_400x250/3/27967.jpg", clicksCount: 0}];

        $scope.cats = cats;
        $scope.currentCat = cats[0];

       $scope.selectCat = function (cat) {

           $scope.currentCat = cat;
       }

        $scope.didClickedCat = function (cat) {
            cat.clicksCount ++;
        }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));