"use strict";

angular.module("myApp.catService", ["ngResource", "ngCookies"])

.factory("catService", function($resource, $cookieStore, $q) {
    var KEY = "cats";
    var cats = $cookieStore.get(KEY);
    var catResource = $resource("/cats/:id", {
        id: "@id"
    }, {
        'query': {
            method: 'GET',
            isArray: true
        }
    });

    return {
        getAll: function() {
          if (cats) {
              return $q.resolve(cats);
          }
          return catResource.query(function(cats) {
            $cookieStore.put(KEY, cats);
            return cats;
          }).$promise;
        },
        get: function (catId) {
          return catResource.get({id: catId});
        },
        save: function(cats) {
            $cookieStore.put(KEY, cats);
        }
    };
});
