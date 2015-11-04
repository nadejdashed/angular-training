/**
 * Created by Mykhaylo_Tauzhniansk on 11/4/2015.
 */

(function (module) {

    var catsService = function ($http, $q, $resource) {
        var Cat = $resource('/cats/:id', {id:'@id'}, {
            charge: {method:'PUT', params:{id:'@id'}}
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

        function updateVote(cat){
            Cat.charge(cat);

            //var cats = Cat.query(function(){
            //     for (var i=0; i<cats.length; i++) {
            //        if (cat.id === cats[i].id) {
            //            var returnedcat = cats[i];
            //        }
            //    }
            //    returnedcat.vote = cat.click_num;
            //    //returnedcat.$save();
            //    returnedcat.$charge({vote:cat.click_num});
            //});
        }

        return {allcats:getAllCats, addCatClick:addCat, updateVote:updateVote};
    };
    module.factory("catsService", catsService);

}(angular.module("app")));

