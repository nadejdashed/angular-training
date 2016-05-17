angular.module("app").factory('catService',['$resource',
    function($resource){
        var catResource = $resource("/cats");
        var getCats = function () {
            debugger;
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

        var deleteCat = function (id) {
            debugger;
            var catResource = $resource('/cat/:catId', {catId:'@id'});
            return catResource.delete({'catId':id});
        };
        
        return {
            name:"catService",
            getCats:getCats,
            saveCat:addCat,
            getCat:getCat,
            deleteCat:deleteCat
        };
    }]);