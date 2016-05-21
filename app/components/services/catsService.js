

angular.module("app").factory('catsService',['$resource', '$rootScope',
    function($resource, $rootScope){

      // TODO remove unnecessary code. This code and commented code. 
    var data = [
            {catImg: 'cat1.png', catName: 'zcat1', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat2.png', catName: 'fcat2', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat3.png', catName: 'cat3', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat4.png', catName: 'kcat4', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat5.png', catName: 'cat5', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat6.png', catName: 'cat6', noClicks: 0, votes: 0, visited: false}
        ];


        //var catResource = $resource("/cats");
        var catResource = $resource('/cats/:id');
        var getCats = function () {

        	//resource based implementation
            return catResource.query();
            
            //array based implementation
            //alert(data.length);
            //return data;
        };

        var addCat = function (newCat) {

        	//array based implementation 1
			//data.push(newCat);

			//array based implementation 2 - not work
        	//$rootScope.$apply(function() {
            //	data.push(newCat);
        	//});

			//resolurce based implementation - not work
            return catResource.save(newCat);

        };

        var deleteCat = function (cat) {
          // TODO should be catResource.delete({id: cat.id});
        Cat.delete({id: cat.id});
        return true;
      	};


      var getCat = function (catId) {
        // TODO should be catResource.get({id: catId});
        return Cat.get({id: catId});
      };
        
        return {
            name:"catsService",
            getCats:getCats,
            addCat:addCat,
            deleteCat: deleteCat,
            getCat:getCat
        };
    }]);

/*my prev
var myModule = angular.module('app');
myModule.factory('catsService', function($resource) {
  
  var Cats = $resource("/cats/:id");

  return  {

  	getCats: function() {


  		
  		return Cats.query();

  	},

  	addCat: function(newCatName, newCatImg) {
  		
  		Cats.save({catImg: newCatImg, catName: newCatName, noClicks: 0, votes: 0, visited: false});
  		//return Cats.save({catImg: newCatImg, catName: newCatName, noClicks: 0, votes: 0, visited: false});
  		//console.log('add cat: ' + newCatName + "  image: " + newCatImg);

  		//alert('add cat ' + newCatName + "  image: " + newCatImg);
  	}
  }
});*/

  		/*return [
            {catImg: 'cat1.png', catName: 'zcat1', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat2.png', catName: 'fcat2', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat3.png', catName: 'cat3', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat4.png', catName: 'kcat4', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat5.png', catName: 'cat5', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat6.png', catName: 'cat6', noClicks: 0, votes: 0, visited: false}
        ];*/