/**
 * Created by Ievgen_Budnikov on 11/5/2015.
 */
(function(module) {

    var focusControl = function () {
        return {
            restrict: "A",
            scope: { trigger: '@focusControl' },
            link: function(scope, element) {
                  element[0].focus();
            }
        };
    };

    module.directive("focusControl", focusControl);

}(angular.module("app")));