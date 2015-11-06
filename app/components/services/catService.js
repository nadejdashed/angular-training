/**
 * Created by Artem_Lazurenko on 03.11.2015.
 */
(function(module) {

    var catService = function ($http) {
        var data/* = [
            {
                name: "Kitty",
                url: "http://i.bigmir.net/img/dnevnik/uploads/cmu_1153/29306/1.jpg",
                counter: 0,
                viewed: false
            },
            {
                name: "Pussy",
                url: "https://upload.wikimedia.org/wikipedia/uk/c/cf/Black-cat.jpg",
                counter: 0,
                viewed: false
            },
            {
                name: "Bella",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/9942_4c1047ed74f3c_lg.jpg?itok=8VLsgv-X",
                counter: 0,
                viewed: false},
            {
                name: "Chloe",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/18770_5096adaa3aca3_lg.jpg?itok=i9r4AAmg",
                counter: 0,
                viewed: false},
            {
                name: "Jaspr",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false},
            {
                name: "Cat1",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Cat2",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Cat3",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Cat4",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Cat5",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Cat6",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Cat7",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp1",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp2",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false},
            {
                name: "Jasp3",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp4",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp5",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp6",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp7",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp8",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp9",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Jasp0",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Joh",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Bum",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Vasya",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Behem",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Crunchy",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Meee",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            },
            {
                name: "Nav",
                url: "http://cuteness-test.s3.amazonaws.com/styles/profile_crop/s3/pet-photos/1044_49f4ceb454caa_lg.jpg?itok=B8iibRqw",
                counter: 0,
                viewed: false
            }]*/;

        var valid = false;

        var getCats = function () {
            return $http({
                method: 'GET',
                url: '/cats'
            }).then(
                function(data) {
                    valid = true;
                    return data;
                }, {});
        };

        var getCat = function (id) {
            return $http({
                method: 'GET',
                url: '/cats/' + id
            });
        };

        var addCat = function (cat) {
            return $http.post('/cats/', cat)
                .then(
                function(data) {
                    valid = true;
                    return data;
                }, {});
        };

        var updateCat = function (cat) {
            return $http.put('/cats/'  + cat.id, cat).then(
                function(data) {
                    valid = true;
                    return data;
                }, {});
        };

        var deleteCat = function (id) {
            return $http.delete('/cats/'  + id)
                .then( function(data) {
                    valid = false;
                    return data;
                });
        };

        var isValid  = function() {
            return valid;
        };

        return {
            getCats: getCats,
            getCat: getCat,
            updateCat: updateCat,
            addCat: addCat,
            deleteCat:deleteCat,
            isValid: isValid
        };
    };

    module.service("catService", catService);

}(angular.module("app")));