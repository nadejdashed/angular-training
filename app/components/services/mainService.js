(function(module) {

	var catService = function($resource) {
		var Cat = $resource('/cat/:id');

		return {
			cat: Cat,
			queryCat: function() {
				return Cat.query();
			},
			saveCat: function(cat) {
				return Cat.save(cat);
				
				// it is another way:
				//newCat = new Cat(cat);
				//newCat.$save();
			}
		}
	};

	module.factory("catService", catService);

}(angular.module("app")));