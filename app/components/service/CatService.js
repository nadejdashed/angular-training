(function (module) {

  module.factory('CatService', function ($resource) {
    var Cat;
    Cat = $resource('/cats/:id');
    return {

      getCats: function () {
        return Cat.query();
      },

      saveCat: function (cat) {
        Cat.save(cat);
      }

    };
  });

}(angular.module("app")));