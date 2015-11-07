/**
 * Created by Artem_Lazurenko on 07.11.2015.
 */
(function(module) {
    var authInterceptor = function (userService){
        return {
            request: function (request) {

            },


            response: function (response) {

            }
        }
    }

    module.factory("authInterceptor", authInterceptor);
}(angular.module("app")));