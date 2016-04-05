angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var cats = [
           {"id": 1,
            "name": "Alex",
            "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
            "vote": 0},
        {
            "id": 2,
            "name": "Viktor",
            "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
            "vote": 0
        }, {
            "id": 3,
            "name": "Albert",
            "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
            "vote": 0
        }, {
            "id": 4,
            "name": "Lia",
            "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
            "vote": 0
        },

            {
                "id": 5,
                "name": "Unknown",
                "src": "http://goodnewsanimal.ru/_nw/37/00118217.jpg",
                "vote": 0
            }
        ];

       $httpBackend.whenGET(/\.html/).passThrough();
       $httpBackend.whenGET(/\.json/).passThrough();
       $httpBackend.whenGET('/cats').respond(cats);
       
    $httpBackend.whenPOST('/cats').respond(function(method, url, data){
      cats.push(data);
        alert("Name Cat:" + data + ", new length:"+cats.length);
      return [200, data];
    });
  });

angular.module('app').requires.push('app-mock');