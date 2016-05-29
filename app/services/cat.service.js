(function(module) {

	var catService = function($resource) {
		var catResource = $resource('/cats/:catId', {catId: '@id'});

		this.getCatsList = function() {
			// TODO better return Resources. Where it's necessary you could take promise from the Resource
			return catResource.query().$promise;
		}

		this.getSingleCat = function(id) {debugger;
			return catResource.get({catId: id}).$promise;
		}

		this.addCat = function(cat) {
			return catResource.save(cat);
		}
	}

	module.service('catService', catService);

})(angular.module('app'));