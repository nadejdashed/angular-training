angular.module("app").factory('catService',['$resource',
    function($resource){
        var catResource = $resource("/cats");
        var getCats = function () {
            return catResource.query();
        };

        var addCat = function (newCat) {
            catResource.save(newCat);
        }
        
        return {
            name:"catService",
            getCats:getCats,
            addCat:addCat
        };
    }]);