(function(module) {

	var catService = function($resource) {
		var catResource = $resource('/cat/:catId', {catId: '@id'});

		this.getCatsList = function() {
			return catResource.query().$promise;
		}

		this.getSingleCat = function(id) {
			return catResource.get({catId: id}).$promise;
		}

		this.addCat = function(cat) {
			var newCat = new catResource(cat);
			return newCat.$save();
		}
	}

	module.service('catService', catService);

})(angular.module('app'));