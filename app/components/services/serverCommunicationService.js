
angular.module('app').service("serverCommunication",  function($resource, $http, $templateCache, $timeout, $q){
    var CatsDataBase  = $resource('/cats/:id');

    function getDataResource (){
        var cats = CatsDataBase.query( function(data) {
            console.info('info array',data);
        });
        return cats;
    }

    /* using $http */

    function getDataHttp (){

        var deferred = $q.defer();

        $timeout(function(){
                $http.get('/cats', {cache: 'none'})
                    .then(function(data){
                        deferred.resolve(data);
                        //console.log('data in serverCommunication: ',data);

                    }
                )
        },500);

      /*  function doParseArray(response){
            var result = [];
            for(var i=0; i<response.length; i++){
                result.push(doParse(response[i]));
            }
            return result;
        }
        function doParse(response){
            return {
                data: response.id,

        };
    }
    def.resolve(doParseArray(resp));
*/
        return deferred.promise;
    }

    /**
     *
     * @param cat Object
     * @returns {HttpPromise}
     */
    function createItemHttp (cat){
        console.log('adding...'+cat)
        return $http.post('/cats', cat);
    }

    function updateItemHttp (cat){
        return $http.put('/cats/'+id, cat);
    }

    /**
     * @param id Integer
     * @returns {HttpPromise}
     */
    function removeItemHttp(cat){
        console.log('deleteing... /cats/'+cat.id , 'pet.time',cat.time);
        return $http.delete('/cats/'+cat.id, {timeout: 10})
    }
    /* using $http END*/

    return {
        getDataResource : getDataResource,

        createItemHttp : createItemHttp,
        getDataHttp : getDataHttp,
        updateItemHttp : updateItemHttp,
        removeItemHttp : removeItemHttp
    }

});



/*Default json*/

/*
 [
 { "id": 1,
 "name": "Stu",
 "time": 1439486773,
 "img":"http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
 "owner" :"owner 0",
 "clicks": 0},

 { "id": 2,
 "name": "Dru",
 "time": 1439486773,
 "img":"http://www.factslides.com/imgs/black-cat.jpg",
 "owner" :"owner 2",
 "clicks": 0},

 { "id": 4,
 "name": "Zoo",
 "time": 1439486773,
 "img":"http://media4.popsugar-assets.com/files/2014/09/19/978/n/1922507/4bc5042ee37fa1f9_thumb_temp_cover_file13465311411161397.xxxlarge/i/Funny-Cat-Costumes.jpg",
 "owner" :"owner 3",
 "clicks": 0},

 { "id": 3,
 "name": "Bru",
 "time": 1439486773,
 "img":"https://statswithcats.files.wordpress.com/2012/07/claws-cool-cat-picture-21-b.jpg",
 "detail" :"owner 4",
 "clicks": 0},



 { "id": 5,
 "name": "Hru",
 "time": 1439486773,
 "img":"http://www.andrew.cmu.edu/user/cfperron/cats/images/cat8.jpg",
 "owner" :"owner 5",
 "clicks": 5}]
 */