angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var data = [{
      "id": 1,
      "name": "Bonnie and Clyde",
      "image": "http://1.bp.blogspot.com/-HJQXRmUxnZ8/TyVYBGySW6I/AAAAAAAAB58/s3us6xN18l4/s1600/Cats+Fight1.jpg",
      "votes": 0
    }, {
      "id": 2,
      "name": "Cute Cats",
      "image": "http://4.bp.blogspot.com/-Il6dn2PyLW4/T8tVa1HQmkI/AAAAAAAABls/5u1UIJh_CUw/s1600/so-freakin-cute--cats-248645_1024_768.jpg",
      "votes": 0
    }, {
      "id": 3,
      "name": "Batman",
      "image": "http://art-on.ru/wp-content/uploads/2013/06/Funny_cats_12.jpg",
      "votes": 0
    }, {
      "id": 4,
      "name": "Cristmas Elfs",
      "image": "http://doseng.org/uploads/posts/2011-12/1324885936_1001.jpg",
      "votes": 0
    }, {
      "id": 5,
      "name": "Fluffy Cat",
      "image": "http://brightwallpapers.com.ua/Uploads/19-1-2014/c228ef3e-f29a-4bf0-91cf-18d710da7e0d/thumb2-eefe36ad18e9c370c65493bf01682da8.jpg",
      "votes": 0
    }, {
    	"id": 6,
      "name": "The Cutest Cat",
      "image": "http://images6.fanpop.com/image/photos/33400000/Cute-Cats-cats-33440930-1280-800.jpg",
      "votes": 0
    }];

    $httpBackend.whenGET('/cats').respond(data);
    $httpBackend.whenGET(/^\/cats\/\d+/).respond(data[0]);
    $httpBackend.whenGET(/\.html/).passThrough();

    $httpBackend.whenPOST('/cats').respond(function(method, url, data, headers){
      data.push(data);
      return [200, data];
    });
  });

angular.module('app').requires.push('app-mock');