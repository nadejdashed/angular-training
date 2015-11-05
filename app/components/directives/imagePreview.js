(function(module) {



    var imagePreview = function ()
    {

        return {
            scope: {
                imagesrc : "="
            },
            templateUrl:'/templates/imagepreview.html',

        }
    }
    module.directive("imagePreview", imagePreview);

}(angular.module("app")));
