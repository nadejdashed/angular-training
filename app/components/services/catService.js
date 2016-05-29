(function(module) {

    var catService = function ($resource, $state) {
        var Cats = $resource("/cats/:id");
        
        this.getCats = function() {
            return Cats.query();
        };

        this.addCat = function(kitty) {

            var newCat = new Cats(kitty);
            // TODO move better state change in controller. Service that saves cat should not worry about how vies react on the complete reaction 
            newCat.$save().then(function(){
                $state.go('home');
            });
        }
    };

    module.service('catService', catService);

}(angular.module("app")));