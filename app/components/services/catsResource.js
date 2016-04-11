(function(module) {

    module.factory('CatsResource', ['$resource', function($resource) {
        var CatsResource =  $resource('/cats/:id', null);
        return {
            query: function(then) {
                return CatsResource.query(then);
            },
            save: function(cat) {
                return CatsResource.save(cat);
            }
        };
    }]);

})(angular.module("app"));