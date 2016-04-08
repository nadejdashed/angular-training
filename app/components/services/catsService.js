var myModule = angular.module('app');
myModule.factory('catsService', function($resource) {
  
  var Cats = $resource("/cats/:id");

  return  {

  	getCats: function() {


  		
  		return Cats.query();
  		/*return [
            {catImg: 'cat1.png', catName: 'zcat1', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat2.png', catName: 'fcat2', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat3.png', catName: 'cat3', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat4.png', catName: 'kcat4', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat5.png', catName: 'cat5', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat6.png', catName: 'cat6', noClicks: 0, votes: 0, visited: false}
        ];*/
  	},

  	addCat: function(newCatName, newCatImg) {
  		Cats.save({catImg: newCatImg, catName: newCatName, noClicks: 0, votes: 0, visited: false});
  		console.log('add cat: ' + newCatName + "  image: " + newCatImg);

  		alert('add cat ' + newCatName + "  image: " + newCatImg);
  	}
  }
});