angular.module("app").directive('imagePreview', function ($parse) {
    return {
        restrict: "E",
        templateUrl: "/templates/imagePreview.html",
        scope: {
            urlTitle: '@imageTitle',
            imageUrl: '@imageSrc',
            errorImageUrl: '@imageErrSrc'
        },
        //controller: function($scope, $attrs) {
        //    //$scope.urlTitle = $attrs.imageTitle;
        //    //$scope.errorImageUrl = $attrs.imageErrSrc;
        //    //$scope.imageUrl = $attrs.imageSrc;
        //}
    }
});