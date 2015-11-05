/**
 * Created by Mykhaylo_Tauzhniansk on 11/5/2015.
 */
(function (module) {

    var imagePreviewDirective = function () {
        return {
            restrict: 'E',
            scope: {url: '='},
            templateUrl: '/templates/image_preview.html',
        };
    };
    module.directive("imPreViewDir", imagePreviewDirective);

}(angular.module("app")));
