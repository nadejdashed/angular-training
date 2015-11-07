/**
 * Created by Pavlo_Komenda on 11/7/2015.
 */
(function (app) {

    app.controller('viewController', function ($scope) {
        $scope.getIncrement = function (obj) {
            obj.clickQuantity = obj.clickQuantity ? obj.clickQuantity +1 :  1;
        };
        $scope.vote = function (obj, bool) {
            if (bool) {
                obj.votes += 1;
            } else {
                obj.votes -= 1 || 0;
            }
        };
    });
})(angular.module('app'));