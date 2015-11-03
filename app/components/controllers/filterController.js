/**
 * Created by Artem_Lazurenko on 03.11.2015.
 */
(function(module) {

    var filterController = function ($scope) {
        $scope.$watch('searchText',
            // This is the change listener, called when the value returned from the above function changes
            function(newValue, oldValue) {
                if ( newValue !== oldValue ) {
                    // Only increment the counter if the value changed
                    $scope.$emit('filter', newValue);
                }
            }
        );
        $scope.$watch('ordrBy',
            // This is the change listener, called when the value returned from the above function changes
            function(newValue, oldValue) {
                if ( newValue !== oldValue ) {
                    // Only increment the counter if the value changed
                    $scope.$emit('ordrBy', newValue);
                }
            }
        );
    };

    module.controller("filterController", filterController);

}(angular.module("app")));