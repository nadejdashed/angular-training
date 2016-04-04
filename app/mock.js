angular.module('app-mock', ['ngMockE2E'])
   .run(function($httpBackend) {

    var data = [{
      "id": 1,
      "name": "Angular Training",
      "src": "https://angularjs.org/img/AngularJS-large.png",
      "trainer": "Nadzeya Shedava",
      "date": "2015.10.12",
      "tags": ["JS", "Framework", "Frontend"]
    }, {
      "id": 2,
      "name": ".Net intro",
      "src": "https://upload.wikimedia.org/wikipedia/fr/9/99/Logo_microsoft_net.png",
      "trainer": "Egor Tichonov",
      "date": "2014.10.12",
      "tags": ["Backend", "Framework"]
    }, {
      "id": 3,
      "name": "PHP in depth",
      "src": "http://uskov.com.ua/wp-content/uploads/2015/04/php-elephant.png",
      "trainer": "Alexandr Efimov",
      "date": "2015.09.15",
      "tags": ["Backend"]
    }, {
      "id": 4,
      "name": "News in Drupal",
      "src": "http://www.activemedia.by/i/drupal_1.png",
      "trainer": "Alexandr Efimov",
      "date": "2014.12.27",
      "tags": ["Backend", "CMS"]
    }];

    $httpBackend.whenGET('/event').respond(data);
    $httpBackend.whenGET(/^\/event\/\d+/).respond(data[0]);
    
    $httpBackend.whenPOST('/event').respond(function(method, url, data, headers){
      data.push(data);
      return [200, data];
    });
  });

angular.module('app').requires.push('app-mock');