/**
 * Created by vv on 23.10.2015.
 */
angular.module("app").directive('voteSpiner', function() {
    return {
        restrict :'EA',
        scope : {
            item: '='
        },
        link: function(scope, element, attrs) {
            scope.item++;
        }
    }
});
