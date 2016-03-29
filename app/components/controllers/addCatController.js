(function(module) {



    var catController = function ($scope) {
        $scope.clearForm = function () {
            var cat ={name:"", url:""};
            $scope.cat = cat;
        }

        $scope.clearForm();

        $scope.saveCat = function (cat) {
            alert("Saving for cat name:" + cat.name + " image:" + cat.url);
            $scope.clearForm();
        }
    };
    module.controller("addCatController", catController);

}(angular.module("app")));