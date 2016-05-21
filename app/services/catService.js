angular.module("app").factory('catService',['$resource',
    function($resource){
        var catResource = $resource('/cat/:catId', {catId:'@id'});
        
        var getCats = function () {
            return catResource.query();
        };

        var addCat = function (newCat) {
            catResource.save(newCat);
        };

        var getCat = function (id) {
            // TODO resource is already created in the top of the service. It is not necessary to create it each time. 
            // getCats and getCat should use the same URL /cat and /cat/:id
            // TODO better to create function that return resource and promise use only where it's necessary
            return catResource.get({'catId':id}, function (data) {
                return data;
            }).$promise;
        };

        var deleteCat = function (id) {
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