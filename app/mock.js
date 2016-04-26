angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var data = [
            {catImg: 'cat1.png', catName: 'zcat1', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat2.png', catName: 'fcat2', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat3.png', catName: 'cat3', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat4.png', catName: 'kcat4', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat5.png', catName: 'cat5', noClicks: 0, votes: 0, visited: false},
            {catImg: 'cat6.png', catName: 'cat6', noClicks: 0, votes: 0, visited: false}
        ];;

    $httpBackend.whenGET('/cats').respond(data);
    $httpBackend.whenGET(/^\/cats\/\d+/).respond(data[0]);
    
    $httpBackend.whenPOST('/cats').respond(function(method, url, tdata, headers){
      data.push(tdata);
      return [200, data];
    });

    $httpBackend.whenGET(/\.html/).passThrough();


    //try this
            $httpBackend.whenPUT(/^\/cats\/\d+/).respond(function(method, url, inputData, headers) {
          console.log("cat updated " + url);
          return [200, inputData];
        });
  });

angular.module('app').requires.push('app-mock');