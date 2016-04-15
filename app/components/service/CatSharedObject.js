(function (module) {

  module.factory('CatSharedObject', function (CatService) {
    var cats = CatService.getCats();

    var findCat = function (id) {
      for (var i = 0; i < cats.length; i++) {
        if (cats[i].id = id) {
          return cats[i];
        }
      }
      return undefined;
    };

    return {

      getCats: function () {
        if (!cats) {
          cats = CatService.getCats();
        }
        return cats;
      },

      saveCat: function (cat) {
        if (!findCat(cat.id)) {
          var newId = CatService.saveCat(cat);
          if (newId) {
            cat.id = newId;
            cats.push(cat);
          }
        }
        return cats;
      },

      deleteCat: function (cat) {
        if (findCat(cat.id)) {
          if (CatService.deleteCat(cat)) {
            cats = cats.filter(function (item) {
              return item.id != cat.id;
            });
          }
        }
        return cats;
      },

      getCat: function (id) {
        var cat = findCat(id);
        if (!cat) {
          cat = CatService.getCat(id);
          if (cat) {
            cats.push(cat);
          }
        }
        return cat;
      }

    };
  });

}(angular.module("app")));
