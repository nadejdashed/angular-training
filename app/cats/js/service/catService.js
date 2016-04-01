"use strict";

angular.module("myApp.catService", ["ngResource", "ngCookies"])

.factory("catService", function($resource, $cookieStore, $q) {
  var KEY = "cats";
  var cats = $cookieStore.get(KEY);
  var catResource = $resource("cats/js/json/cats.json");

  return {
    get: function() {
      if (cats) {
        return $q.resolve(cats);
      }

      return catResource.get().$promise.then(function(response) {
        cats = response.cats;
        $cookieStore.put(KEY, cats);
        return cats;
      });
    },
    save: function (cats) {
      $cookieStore.put(KEY, cats);
    }
  };
});
