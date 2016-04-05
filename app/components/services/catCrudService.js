(function(module) {
var Cat;
    var catCrudService = function ($resource) {
      Cat = $resource('/cat/:id', {id:'@id'});

      this.getCats = function(){
        return Cat.query();
      };

      this.getCat = function(options){
        return Cat.get(options);
      };

      this.saveCat = function(options) {
        return Cat.post(options);
      }
    };

    module.service("catCrudService", catCrudService);

}(angular.module("app")));
