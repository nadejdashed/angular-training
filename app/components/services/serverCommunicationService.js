
angular.module('app').service("serverCommunication",  function($resource, $http, $templateCache, $timeout, $q){

    //var url = '/json/cats.json';
    //var CatsDataBase  = $resource('/json/cats.json');
    //
    //var cat = CatsDataBase.get( function() {
    //    console.info('DataBase',catsFromServer);
    //    //user.abc = true;
    //    //user.$save();
    //});

    //DataBase = ['halo'];
    /*
    var User = $resource('/user/:userId', {userId:'@id'});

    var user = User.get({userId:123}, function() {
        user.abc = true;
        user.$save();
    });
    */

    function getDataResource (){
        return CatsDataBase
    }

    /* using $http */

    function getDataHttp (){
        //return $http.get('/json/cats.json', {timeout : 5000});


        var deferred = $q.defer();

        /*
        deferred.then(function(data){
                    deferred.resolve(['wait... data loading']);
                    console.log('wait');
                }
            );*/

        $timeout(function(){
                $http.get('/json/cats.json', {cache: 'none'})
                    .then(function(data){
                        deferred.resolve(data);
                        console.log('data in serverCommunication: ',data);}
                )
        },1000)

        return deferred.promise;

    }

    /**
     *
     * @param cat Object
     * @returns {HttpPromise}
     */
    function createItemHttp (cat){
        return $http.post('/cats', cat);
    }

    function updateItemHttp (cat){
        return $http.put('/cats/'+id, cat);
    }

    /**
     *
     * @param id Integer
     * @returns {HttpPromise}
     */
    function removeItemHttp(pet){
        console.log('deleteing... /cats/'+pet.id , 'pet.time',pet.time)
        return $http.delete('/cats/'+pet.id, {timeout: 10})
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
 "clicks": 0},

 { "id": 2,
 "name": "Dru",
 "time": 1439486773,
 "img":"http://www.factslides.com/imgs/black-cat.jpg",
 "clicks": 0},

 { "id": 3,
 "name": "Bru",
 "time": 1439486773,
 "img":"https://statswithcats.files.wordpress.com/2012/07/claws-cool-cat-picture-21-b.jpg",
 "clicks": 0},

 { "id": 4,
 "name": "Zoo",
 "time": 1439486773,
 "img":"http://media4.popsugar-assets.com/files/2014/09/19/978/n/1922507/4bc5042ee37fa1f9_thumb_temp_cover_file13465311411161397.xxxlarge/i/Funny-Cat-Costumes.jpg",
 "clicks": 0},

 { "id": 5,
 "name": "Hru",
 "time": 1439486773,
 "img":"http://www.andrew.cmu.edu/user/cfperron/cats/images/cat8.jpg",
 "clicks": 5}]
 */