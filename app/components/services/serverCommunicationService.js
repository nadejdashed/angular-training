/*
(function(module) {

    var serverCommunicationOld = function ($scope, $resource) {
        //$scope.DataBase  = $resource('/json/cats.json');
        $scope.DataBase = ['halo'];


        function getData ($scope){
            return $scope.DataBase;
        }

        return {
            getData : getData
        }

    };

    module.factory("serverCommunicationOld", serverCommunicationOld);

}(angular.module("app")));

*/

angular.module('app').service("serverCommunication",  function($resource, $http, $templateCache){
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
            return $http.get('/json/cats.json', {cache: $templateCache});
        }
    /* using $http END*/

    return {
        getDataResource : getDataResource,
        getDataHttp : getDataHttp
    }

});
