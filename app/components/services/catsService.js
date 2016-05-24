(function(module) {


function catService($resource, $cookies, $q) {
	var Cat = $resource('/cat/:id', {id:'@id'});

	this.getCats = function() {
		return Cat.query();
	}
	this.getCat = function(_id) {
		// TODO not necessary to write then here (it creates new unnecessary promise)
		// Or even better return the resource: return catsService.getCat({id: _id}). Developers will have access to promise when it's necessary
		return Cat.get({id: _id}).$promise.then(function(cat){
			return cat;
		});
	}
	this.setCat = function(cat) {
		var newCat = new Cat(cat);
		return newCat.$save();
	}
	this.doVote = function(cat){
		// TODO cat is already a Resource
		var newCat = new Cat(cat);
		newCat.$save();
		$cookies.putObject("cat"+cat.id, true);
	}
	this.isVoted = function(cat){
		if(cat) {
			return $cookies.getObject("cat"+cat.id);
		}
		return false;
	}
};
	module.service('catsService', catService);

}(angular.module("app")));