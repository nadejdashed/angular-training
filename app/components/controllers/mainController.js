(function(module) {

    var mainController = function ($scope) {
        $scope.text = "Hello World!!!";

        $scope.image_path_1 = "../im/1_cat.png";

        $scope.image_path_2 = "../im/2_cat.png";

        $scope.first_cat_name = "Tom";
        $scope.second_cat_name = "Jerry cat";

        $scope.first_click_counter =0;
        $scope.second_click_counter =0;

        $scope.firstCountClick = function(){
            $scope.first_click_counter++;
        }
        $scope.secondCountClick = function(){
            $scope.second_click_counter++;
        }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));