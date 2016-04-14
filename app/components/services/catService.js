(function(module) {

    var catService = function ($resource, $state) {
        var Cats = $resource("/cats/:id");
        
        this.getCats = function() {
            return Cats.query();
        };

        this.addCat = function(kitty) {

            var newCat = new Cats(kitty);
            newCat.$save().then(function(){
                $state.go('home');
            });
        }
    };

    module.service('catService', catService);

}(angular.module("app")));