
angular.module('app').service("serverCommunication",  function($resource, $http, $templateCache, $timeout, $q){
    var catsFromServer;
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

        $timeout(
            $http.get('/json/cats.json', {cache: 'none'})
                .then(function(data){
                    deferred.resolve(data);
                    console.log('data in serverCommunication: ',data);}
            ),10000)

        return deferred.promise;

    }

    function removeItemHttp(id){
        return $http.delete('/cats/:id', {customConfig: 'customConfig'})
    }
    /* using $http END*/

    return {
        getDataResource : getDataResource,

        getDataHttp : getDataHttp,
        removeItemHttp : removeItemHttp
    }

});
