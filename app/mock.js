angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var data = [{
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

    $httpBackend.whenGET(/\.html/).passThrough();
    $httpBackend.whenGET('/cat').respond(data);
    $httpBackend.whenGET(/\/cat\/\d+/).respond(data[0]);
    
    $httpBackend.whenPOST('/cat').respond(function(method, url, value, headers){
      data.push(value);
      return [200, value];
    });
  });

angular.module('app').requires.push('app-mock');