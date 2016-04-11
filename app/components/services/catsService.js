(function (module) {

     var cats = function (CatsResource) {
        return {
            query: function (then) {
                return CatsResource.query(then);
            },
            save: function (cat) {
                return CatsResource.save(cat);
            }
        };
    };

    module.factory('cats', ['CatsResource', cats]);

}(angular.module("app")));