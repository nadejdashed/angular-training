angular.module('app-mock', ['ngMockE2E'])
    .run(function ($httpBackend) {

        var data = [
            {
                "id": 1,
                "name": "Alex",
                "src": "http://41.media.tumblr.com/tumblr_m5bkohGQo81r1uaj2o1_500.jpg",
                "vote": 0
            },
            {
                "id": 2,
                "name": "Viktor",
                "src": "http://40.media.tumblr.com/tumblr_m5bkrjZaaj1r1uaj2o1_500.jpg",
                "vote": 3
            },
            {
                "id": 3,
                "name": "Albert",
                "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
                "vote": 0
            },
            {
                "id": 4,
                "name": "Vasya",
                "src": "http://41.media.tumblr.com/ec380ec5410e31799859c634dfaa32af/tumblr_mow3dxYxhO1s4s8lyo1_500.jpg",
                "vote": -1
            },
            {
                "id": 5,
                "name": "Lia",
                "src": "http://40.media.tumblr.com/tumblr_m53xlvjJfu1r1uaj2o1_500.jpg",
                "vote": 5
            }
        ];

        $httpBackend.whenGET(/\.html/).passThrough();

        $httpBackend.whenGET('/event').respond(data);
        $httpBackend.whenGET(/^\/event\/d+/).respond(data[0]);

        $httpBackend.whenPOST('/event').respond(function (method, url, cat, headers) {
            data.push(cat);
            return [200, data];
        });
    });

angular.module('app').requires.push('app-mock');