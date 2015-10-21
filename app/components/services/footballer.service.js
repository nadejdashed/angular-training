angular.module("app").factory('footballerService', function($q, $timeout, $http){
    function getData() {
        var defer = $q.defer();
        $http.get('/footballers').then(function(data){
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    function getDataById(id){
        var defer = $q.defer();
        $http.get('/footballers/' + id).then(function(data){
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    function addData(newFootballer) {
        var defer = $q.defer();
        $http.post('/footballers', newFootballer).then(function(data){
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    function editData(newFootballer) {
        var defer = $q.defer();
        $http.put('/footballers/' + newFootballer.id, newFootballer).then(function(data){
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    function deleteData(id) {
        var defer = $q.defer();
        $http.delete('/footballers/' + id).then(function(data){
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    return {
        getData: getData,
        getDataById: getDataById,
        addData: addData,
        editData: editData,
        deleteData: deleteData
    };
})