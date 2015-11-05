/**
 * Created by Mykhaylo_Tauzhniansk on 11/4/2015.
 */

(function (module) {

    var catsService = function ($http, $q, $resource) {
        var Cat = $resource('/cats/:id', {id:'@id'}, {
            charge: {method:'PUT', params:{id:'@id'}},
            remove: {method:'DELETE', params:{id:'@id'}}
        });
        function doParseArray(response){
            var result = [];
            for(var i=0; i<response.length; i++){
                result.push(doParse(response[i]));
            }
            return result;
        }
        function doParse(response){
            return {
                id: response.id,
                cat_name: response.name,
                link: response.src,
                click_num: response.vote
            };
        }
        function doMyCatToSave(cat){
            return {
                id: cat.id,
                name: cat.cat_name,
                src: cat.link,
                vote: cat.click_num
            };
        }
        function getAllCats(){
            var def  = $q.defer();
            $http.get('cats').success(function(resp){
                def.resolve(doParseArray(resp));
            });
            return def.promise;
        }
        function addCat(cat){
            var def  = $q.defer();
            $http.post('cats', cat).then(function(resp){
                def.resolve(doParseArray(resp));
            });
            return def.promise;
        }
        function removeCat(cat){
            var def  = $q.defer();
            $http.delete('cats/'+ cat.id).then(function(resp){
                def.resolve(doParseArray(resp));
            });
            return def.promise;
            //Cat.remove(doMyCatToSave(cat));
        }
        function updateVote(cat){
            Cat.charge(doMyCatToSave(cat));
        }

        return {allcats:getAllCats, addCatClick:addCat, updateVote:updateVote, removeCat:removeCat};
    };
    module.factory("catsService", catsService);

}(angular.module("app")));

