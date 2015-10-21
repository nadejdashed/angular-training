/**
 * Created by vv on 21.10.2015.
 */
angular.module("app").directive('imagePreview', function() {
    return {
        restrict :'AE',
        templateUrl: '/templates/imagePreview.html',
        scope: {
            src: '=source'
        }

    }
});
