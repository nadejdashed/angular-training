angular.module('app-mock', ['ngMockE2E'])
    .run(function ($httpBackend) {

        var cats = [
            {
                name: 'Senior',
                image: 'img/grooming-needs-senior-cat.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Black',
                image: 'img/black.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Bengal',
                image: 'img/bengal.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Flash',
                image: 'img/flash.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Skull',
                image: 'img/skull.jpg',
                clicks: 0,
                wasSelected: false
            },
            {
                name: 'Bread',
                image: 'img/breading.jpg',
                clicks: 0,
                wasSelected: false
            }];

        $httpBackend.whenGET('/cats').respond(cats);
        $httpBackend.whenGET(/^\/cat\/\d+/).respond(cats[0]);
        
        $httpBackend.whenGET(/\.html/).passThrough();

        $httpBackend.whenPOST('/cat').respond(function (method, url, data, headers) {
            cats.push(JSON.parse(data));
            return [200, data];
        });
    });

angular.module('myApp').requires.push('app-mock');