/**
 * Created by Mykhaylo_Tauzhniansk on 11/4/2015.
 */

(function (module) {

    var catsService = function ($http, $q, Variables) {

        function getAllCats(){
            var def = $q.defer;
            $http.async
        }

        return {allcats:function getCats(){

        }, addCat: function addCat(cat){
            $push(cat);
        }
        };


    };
    module.factory("catsService", catsService);

}(angular.module("app")));

