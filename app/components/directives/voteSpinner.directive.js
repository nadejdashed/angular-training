(function(module) {



    var voteSpinner = function ()
    {


        return {
            scope: {
                vote : '@vote',
                upvote: '&upvote',
                downvote: '&downvote'
            },
            templateUrl:'/templates/votespinner.html',

        }
    }
    module.directive("voteSpinner", voteSpinner);

}(angular.module("app")));