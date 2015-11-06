(function (module) {

    var catsService = function ($http, $q, $timeout, $resource) {

         var catsMuckup = [
            {
                name:'John',
                src:'Artefacts/cat1.jpeg',
                vote:0
            },
            {
                name:'Mary',
                src:'Artefacts/cat2.jpeg',
                vote:0
            },
            {
                name:'Mike',
                src:'Artefacts/cat3.jpeg',
                vote:0
            },
            {
                name:'Adam',
                src:'Artefacts/cat4.jpeg',
                vote:0
            },
            {
                name:'Julie',
                src:'Artefacts/cat5.jpeg',
                vote:0
            }
        ];

        var catsResource = $resource("/cats/:id", {"id": "@id"}, {
            'update': { method: "PUT"}
        });

        function getCats() {
            return catsResource.query();
        }

        function getCatsPromise() {
            //var defer = $q.defer();
            //$timeout(function(){
            //    defer.resolve(catsMuckup);
            //}, 1000);
            //return defer.promise;

            return $http.get('/cats')
                .then(function(resp) {
                    return resp.data;
                });
        };

        function addCatPromise(cat) {
            return $http.post('/cats', cat)
                .then(function(resp) {
                    return resp.data;
                });
        };

        function deleteCatPromise(cat) {
            return $http.delete('/cats/'+cat.id)
                .then(function(resp) {
                    return resp.data;
                });
        };

        return {
            getCatsPromise: getCatsPromise,
            getCats: getCats,
            addCatPromise: addCatPromise,
            deleteCatPromise: deleteCatPromise
        };

    };

    module.service("catsService", catsService)

}(angular.module("app")));