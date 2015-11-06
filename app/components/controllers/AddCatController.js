/**
 * Created by Mykhaylo_Tauzhniansk on 11/4/2015.
 */
(function(module) {

    var addCatController = function ($scope, catsService, $window) {

        $scope.addCatClick = function(cat){
            console.log("CAT - " + cat);
            var newCat ={id:100, name:cat.newcatname, src: cat.newcaturl, vote: 0, owner: "Misha"};
            catsService.addCatClick(newCat).then(function(response){
                console.log("Cat has been added!!");
                $window.history.back();
            });
        }
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));