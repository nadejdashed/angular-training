(function(module) {


function catService($resource, $cookies) {
	var Cat = $resource('/cat/:id', {id:'@id'});

	this.getCats = function() {
		return Cat.query();
	}
	this.setCat = function(cat) {
		var newCat = new Cat(cat);
		return newCat.$save();
	}
	this.doVote = function(cat){
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