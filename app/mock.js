angular.module('app-mock', ['ngMockE2E'])
  .run(function ($httpBackend) {

    var catData = [
      {
        id: 1,
        name: 'Alex',
        url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg',
        vote: 0
      },
      {
        id: 2,
        name: 'Ilya',
        url: 'http://pictures-of-cats.org/wp-content/uploads/images/manx-header.jpg',
        vote: 0
      },
      {
        id: 3,
        name: 'Ben',
        url: 'http://cdn1.theodysseyonline.com/files/2016/01/27/635895219708839342-1300080425_Happy%20Cat.jpg',
        vote: 0
      },
      {
        id: 4,
        name: 'Mike',
        url: 'http://www.mustlovecats.net/images/cat-food-treats-21843798.jpg',
        vote: 0
      },
      {
        id: 5,
        name: 'Kevin',
        url: 'http://bestpethomeremedies.com/wp-content/uploads/2013/10/Cat-Vomiting.jpg',
        vote: 0
      }
    ];

    $httpBackend.whenGET('/cats').respond(catData);
    $httpBackend.whenGET(/^\/cats\/d+/).respond(catData[0]);

    $httpBackend.whenPOST('/cats').respond(function (method, url, data, headers) {
      data = JSON.parse(data);
      data.id = catData[catData.length - 1].id + 1;
      catData.push(data);
      return [200];
    });

    $httpBackend.whenGET(/\.html/).passThrough();
  });

angular.module('app').requires.push('app-mock');