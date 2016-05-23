"use strict";

angular.module('app-mock', ['ngMockE2E'])
    .run(function($httpBackend) {

        var cats = [{
            "id": "_4zmq46rst",
            "name": "cat1",
            "src": "cats/img/cat1.jpg",
            "votes": 0
        }, {
            "id": "_0k570c0zo",
            "name": "cat2",
            "src": "cats/img/cat2.jpg",
            "votes": 0
        }, {
            "id": "_3kw0fbs26",
            "name": "cat3",
            "src": "cats/img/cat3.jpg",
            "votes": 0
        }, {
            "id": "_090hnp4ro",
            "name": "cat4",
            "src": "cats/img/cat4.jpg",
            "votes": 0
        }, {
            "id": "_rictjzyxm",
            "name": "cat5",
            "src": "cats/img/cat5.jpg",
            "votes": 0
        }];


        $httpBackend.whenGET('/cats').respond(cats);
        $httpBackend.whenGET(/^\/cats\/.+$/).respond(function(method, url) {
            var catId = url.replace(/^\/cats\//, "");
            var cat = cats.filter(function (item) {
              return item.id === catId;
            });
            return [200, cat[0]];
        });
        $httpBackend.whenGET(/\.html/).passThrough();
        $httpBackend.whenPOST('/cats').respond(function(method, url, data, headers) {
            cats.push(JSON.parse(data));
            return [200, data];
        });
    });

angular.module('myApp').requires.push('app-mock');
