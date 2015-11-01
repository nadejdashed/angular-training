angular.module("app").factory('footballerService', function($q, $timeout, $resource, $http){
    var Footballers = $resource('/footballers/:id', {id:'@id'});
    function getData() {
        return Footballers.query();
    }
    function getDataById(id){
        return Footballers.get({id: id});
    }
    function addData(newFootballer) {
        var addedFootballer = new Footballers(newFootballer);
        console.log(addedFootballer.$save());
        return addedFootballer.$save();
    }
    function editData(newFootballer) {
        var defer = $q.defer();
        $http.put('/footballers/' + newFootballer.id, newFootballer).then(function(data){
            defer.resolve(data.data);
        });
        return defer.promise;
    }
    function deleteData(footballer) {
        var defer = $q.defer();
        $http.delete('/footballers/' + footballer.id).then(function(data){
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