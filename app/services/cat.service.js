(function(module) {

	var catService = function($resource) {
		var catResource = $resource('/cats/:catId', {catId: '@id'});

		this.getCatsList = function() {
			return catResource.query().$promise;
		}

		this.getSingleCat = function(id) {
			return catResource.get({catId: id}).$promise;
		}

		this.addCat = function(cat) {
			return catResource.save(cat);
		}
	}

	module.service('catService', catService);

})(angular.module('app'));