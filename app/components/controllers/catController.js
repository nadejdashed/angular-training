/**
 * Created by Ievgen_Budnikov on 11/4/2015.
 */
(function(module) {

    var catController = function ($scope, $http, $location, catService) {
        var cid = $location.search().catid;

        catService.getCatById('http://localhost:8000/cats/' + cid).then(function(cat) {
            $scope.cat = cat;
        });



                //catService.getCatById()
                //    .then(function (data) {
                //        $scope.cat = data; //console.log(data);
                //    }, function (error) {
                //        // promise rejected ... display generic no data found on table
                //        console.log('error', error);
                //    });


        //$http({method: 'GET', url: 'http://localhost:8000/cats/' + cid}).then(function successCallback(response) {
        //    $scope.cat = response.data;
        //
        //}, function errorCallback(response) {
        //    alert("Failed loading cats");
        //});

    };



    module.controller("catController", catController);

}(angular.module("app")));