(function(module) {

    var mainController = function ($scope) {
        $scope.orderBySelected= null;
        $scope.cat = null;
        $scope.cats = [
            {cat_name:"Tom",
                link: "../im/1_cat.png",
                click_num:0},
            {cat_name:"Jerry cat",
                link: "../im/2_cat.png",
                click_num:0},
            {cat_name:"Jerry cat 1",
                link: "../im/3_cat.png",
                click_num:0},
            {cat_name:"Jerry cat 2",
                link: "http://gazettereview.com/wp-content/uploads/2015/05/cat.jpg",
                click_num:0},
            {cat_name:"Jerry cat 3",
                link: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
                click_num:0}
        ];

        $scope.countClick = function(cat){
            cat.click_num++;
        }
        $scope.selectCat = function(cat){
            $scope.cat = cat;
            $scope.cat.is_viewed = true;
        }

        $scope.plusClick = function(cat){
            $scope.countClick(cat);
        }
        $scope.minusClick = function(cat){
            cat.click_num--;
        }

        $scope.searchClick = function(search){
            $scope.searchCat = {cat_name:search};

        }

    };

    module.controller("mainController", mainController);

}(angular.module("app")));