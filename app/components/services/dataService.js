(function(module) {

  module.factory('dataService', function($q, $http) {
    var dataLanguages = {

      getLanguages: function() {
        var deferred = $q.defer();
        $http.get('/languages').success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      getLanguage: function(lang) {
        var deferred = $q.defer();
        $http.get('/languages/'+ lang.id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      addLanguage: function(lang) {
        var deferred = $q.defer();
        $http.post('/languages', lang).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      changeLanguage: function(lang) {
        var deferred = $q.defer();
        $http.put('/languages/'+ lang.id, lang).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },
      
      deleteLanguage: function(lang) {
        var deferred = $q.defer();
        $http.delete('/languages/'+ lang.id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      }

    };
    return dataLanguages;
  });

}(angular.module("app")));

// {"id":0,"name":"JavaScreept language","catImg":"/app/img/js_img.jpg","clicks":0,"likes":0,"dataAdd":"13-FEB-2015"},
// {"id":1,"name":"PHP language","catImg":"/app/img/php_img.jpg","clicks":0,"likes":0,"dataAdd":"18-FEB-2015"},
// {"id":2,"name":".NET language","catImg":"/app/img/net_img.jpg","clicks":0,"likes":0,"dataAdd":"08-MAY-2015"},
// {"id":3,"name":"Java language","catImg":"/app/img/java_img.jpg","clicks":0,"likes":0,"dataAdd":"15-JAN-2015"},
// {"id":4,"name":"Ruby language","catImg":"/app/img/ruby_img.jpg","clicks":0,"likes":0,"dataAdd":"01-MAY-2015"}
