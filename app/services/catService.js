angular.module("app").factory('catService',['$resource',
    function($resource){
        var catResource = $resource("/cats");
        var getCats = function () {
            return catResource.query();
        };

        var addCat = function (newCat) {
            catResource.save(newCat);
        };

        var getCat = function (id) {
            var catResource = $resource('/cat/:catId', {catId:'@id'});
            return catResource.get({'catId':id}, function (data) {
                return data;
            }).$promise;
        };
        
        return {
            name:"catService",
            getCats:getCats,
            saveCat:addCat,
            getCat:getCat
        };
    }]);