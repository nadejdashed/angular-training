angular.module('app-mock', ['ngMockE2E'])
  .run(function($httpBackend) {

    var data = [{
      "id": 1,
      "name": "Alex",
      "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
      "vote": -2,
      "date": 1459246391865
    }, {
      "id": 2,
      "name": "Viktor",
      "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
      "vote": 3,
      "date": 1459746587222
    }, {
      "id": 3,
      "name": "Albert",
      "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
      "vote": 0,
      "date": 1449736391865
    }, {
      "id": 4,
      "name": "Lia",
      "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
      "vote": 5,
      "date": 1458646391865
    }];

      $httpBackend.whenGET('/cat').respond(function(){
          debugger;
          return [200, data];
      });
      $httpBackend.whenGET(/^\/cat\/\d+/).respond(function(method, url, ndata, headers){
          debugger;
          var ind = JSON.parse(ndata);
          return [200, data[ind]];
      });
      $httpBackend.whenGET(/\.html/).passThrough();

      $httpBackend.whenPOST('/cat').respond(function(method, url, ndata, headers){
          data.push(JSON.parse(ndata));
          return [200, ndata];
      });
  });

angular.module('app').requires.push('app-mock');