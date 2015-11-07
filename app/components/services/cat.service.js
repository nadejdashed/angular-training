(function(module) {



    var catService = function ($q,$resource,$cookies) {


        var CatsResource = $resource('/cats/:id',{id:'@id'}, {
            update: {method: 'PUT'}
        });


        var getAll = function()
        {

            return CatsResource.query().$promise;

        };


        var vote = function(cat,vote)
        {
            if(canVote(cat,vote))
            {
                cat.vote +=vote;
                var resource = new CatsResource(cat);
                $cookies.put(cat.id,vote.toString());
                resource.$update();
            }

        }


        var canVote = function(cat, vote)
        {
            var voted = $cookies.get(cat.id);
            return !voted;
        }


        var saveCat = function(cat)
        {
            var resourse = new CatsResource(cat);
            resourse.$save();
        };

        var positiveVoteCat = function(cat)
        {
            vote(cat,1);
        }

        var negativeVoteCat= function(cat)
        {
            vote(cat, -1);
        }


        var getCatByID = function(catID)
        {

            return CatsResource.get({id: catID});
        }


        var deleteCat = function(cat)
        {
            return CatsResource.delete({id: cat.id});
        }


        var editCat = function(cat)
        {
            return CatsResource.update({id: cat.id},cat);
        }

        return {
            getAllPromise: getAll,
            saveNewCat:saveCat,
            positiveVote: positiveVoteCat,
            negativeVote: negativeVoteCat,
            getCatByID:getCatByID,
            deleteCat:deleteCat,
            editCat:editCat
        }

    };

    module.factory("catService", catService);

}(angular.module("app")));