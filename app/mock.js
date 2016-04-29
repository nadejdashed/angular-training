angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var cats = [{
  "id": 1,
  "name": "Alex",
  "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
  "vote": 0
}, {
  "id": 2,
  "name": "Viktor",
  "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
  "vote": 3
}, {
  "id": 3,
  "name": "Albert",
  "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
  "vote": 0
}, {
  "id": 4,
  "name": "Lia",
  "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
  "vote": 5
}];

    $httpBackend.when('GET', /\.html$/).passThrough();
    $httpBackend.when('GET', /\.jpg$/).passThrough();
    $httpBackend.whenGET('/cat').respond(cats);
    $httpBackend.whenGET(/\/cat\/\d+/,undefined,['cat']).respond(function(method, url, data) {
      var catId = parseInt(url.substring(5));
      var cat = cats[catId - 1];
      if(cat){
        return [200, cat];
      }
      return [404];
    });
    
    $httpBackend.whenPOST(/\/cat\/\d+/).respond(function(method, url, data, headers){
      var newCat = {};
      newCat = angular.fromJson(data); 
      if(newCat.id) {
        cats[newCat.id-1] = newCat;
      } else {
        newCat.id = cats.length + 1;
        cats.push(newCat);
      }
      return [200, data];
    });
  });

angular.module('app').requires.push('app-mock');