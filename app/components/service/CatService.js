(function (module) {

  module.factory('CatService', function ($resource) {
    var Cat = $resource('/cats/:id');
    
    return {

      getCats: function () {
        return Cat.query();
      },

      saveCat: function (cat) {
        Cat.save(cat);
      },

      deleteCat: function (cat) {
        Cat.delete({id: cat.id});
        return true;
      },

      getCat: function (catId) {
        return Cat.get({id: catId});
      }

    };
  });  
}(angular.module("app")));