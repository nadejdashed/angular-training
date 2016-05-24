(function(module) {

	var catService = function($resource) {
		var Cat = $resource('/cat/:id');

		return {
			// TODO do not allow access to Resource in other components. The work with resource should be only in this service.
			// All other components know only that they receive item with promise
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