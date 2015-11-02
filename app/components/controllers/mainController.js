(function(module) {



    var mainController = function ($scope) {

        $scope.pride = [{catName:"Hires", imageUrl:"http://catsnnov.ru/wp-content/uploads/2013/07/%D1%80%D1%8B%D0%B6%D0%B8%D0%B9-%D0%BA%D0%BE%D1%82.jpg", clicksCount: 0},
            {catName:"Babur", imageUrl:"http://img0.joyreactor.cc/pics/post/%D0%BA%D0%BE%D1%82%D1%8D-%D0%BD%D0%B5-%D1%80%D0%B0%D1%81%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%BA%D0%BE%D1%82%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D1%82%D0%B0-266885.jpeg", clicksCount: 0},
            {catName:"Samsa", imageUrl:"http://infosmi.net/images/stories/articles/2013/Kuryozy/11-2013/10/70-1.jpg", clicksCount: 0},
            {catName:"Barsik", imageUrl:"http://cats-burg.ru/wp-content/uploads/2014/08/povedenie_kotov.jpg", clicksCount: 0},
            {catName:"Murka", imageUrl:"http://i.ytimg.com/vi/JbIs2LCGjSw/hqdefault.jpg", clicksCount: 0},
        ];


        $scope.clickOnCat = function (cat)
        {
            cat.clicksCount += 1;
        }

        $scope.clickOnCatName = function (cat)
        {
            $scope.selectedCat = cat;
        }


        $scope.selectedCat = $scope.pride[0];
    };

    module.controller("mainController", mainController);

}(angular.module("app")));