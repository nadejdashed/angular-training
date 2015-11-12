angular.module("app").service("catsService", function ($http, $q, $timeout, $resource, $cookies) {

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

    function getCatPromiseById(id) {
        return $http.get('/cats/'+id)
            .then(function(resp) {
                return resp.data;
            });
    };

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

    function updateCatPromise(cat) {
        return $http.put('/cats/'+cat.id, cat)
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

    function isNotAvailableVoteForCat(cat){
        var votedCats = $cookies.getObject("votedCats");
        return cat!=undefined && votedCats!=undefined && votedCats.indexOf(cat.id) >= 0;
    }

    function putCooke(cat) {
        var votedCats = $cookies.getObject("votedCats");
        if (!votedCats) {votedCats = [];}
        if (votedCats.indexOf(cat.id)<0) {
            votedCats.push(cat.id);
            $cookies.putObject("votedCats", votedCats);
        }
    }

    function voteUpForCat(cat) {
        cat.vote++;
        putCooke(cat);
        updateCatPromise(cat);
    };

    function voteDownForCat(cat) {
        cat.vote--;
        putCooke(cat);
        updateCatPromise(cat);
    };


    return {
        getCatsPromise: getCatsPromise,
        getCatPromiseById: getCatPromiseById,
        getCats: getCats,
        addCatPromise: addCatPromise,
        updateCatPromise: updateCatPromise,
        deleteCatPromise: deleteCatPromise,
        voteUpForCat: voteUpForCat,
        voteDownForCat: voteDownForCat,
        isNotAvailableVoteForCat: isNotAvailableVoteForCat
    };

});
