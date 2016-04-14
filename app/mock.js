angular.module('app-mock', ['ngMockE2E'])
    .run(function ($httpBackend) {

        var data = [{
            id: 1,
            imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
            clicked: 0,
            name: "Murzik",
            votes: 0,
            birthday: new Date(2014, 4, 11)
        }, {
            id: 2,
            imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
            clicked: 0,
            name: "Ceasar",
            votes: 0,
            birthday: new Date(2015, 5, 14)
        }, {
            id: 3,
            imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
            clicked: 0,
            name: "Koshak",
            votes: 0,
            birthday: new Date(2005, 5, 1)
        }, {
            id: 4,
            imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
            clicked: 0,
            name: "Austin",
            votes: 0,
            birthday: new Date(2015, 1, 1)
        }, {
            id: 5,
            imgSrc: "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
            clicked: 0,
            name: "Barsik",
            votes: 0,
            birthday: new Date(2013, 4, 4)
        }, {
            id: 6,
            imgSrc: "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
            clicked: 0,
            name: "Alex",
            votes: 0,
            birthday: new Date(2013, 6, 1)
        }];

        $httpBackend.whenGET('/cats').respond(data);
        $httpBackend.whenGET(/^\/cats\/\d+/).respond(function (method, url, inputData) {
            var result = url.split("/");

            return [200, data[parseInt(result[result.length - 1]) - 1]];
        });
        $httpBackend.whenDELETE(/^\/cats\/\d+/).respond(function (method, url, inputData, headers) {
            data.splice(0, 1);
            return [200];
        });

        $httpBackend.whenPUT(/^\/cats\/\d+/).respond(function (method, url, inputData, headers) {
            console.log("cat updated " + url);
            var result = url.split("/");
            var index = parseInt(result[result.length - 1]) - 1;
            data[index] = inputData;
            return [200, inputData];
        });

        $httpBackend.whenPOST('/cats').respond(function (method, url, inputData, headers) {
            var newData;
            if (typeof inputData === 'string') {
                newData = JSON.parse(inputData);
            } else {
                newData = inputData;
            }
            newData.id = Math.floor(Math.random() * (1000));
            newData.birthday = new Date();
            newData.votes = 0;
            newData.imgageSrc = newData.imageUrl;
            console.log(newData);

            data.push(newData);
            return [200, newData];
        });

        $httpBackend.whenGET(/\.html/).passThrough();
    });

angular.module('app').requires.push('app-mock');
