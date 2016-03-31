(function(module) {

    var eventsController = function ($scope, $rootScope, eventsService, eventsSelection, $log, 
                                     $compile, $rootElement, $timeout,$rootScope, $parse) {
        var vm = this;

        $timeout(function(){
            var el = $compile('<h1>{{selectedEvents.length}}</h1>')($scope);
            $rootElement.after(el);
            
            var p = $parse('2 + 3');
            console.log(p($scope));
        }, 0);
        
        
        eventsService.getEvents().then(function(data){
             vm.events = data;
        });
        /*vm.events = eventsService.getEventResources();*/
        /*eventsService.getEventsQ().then(function(data){
            vm.events = data;
        }, function(){
            console.log('error');
        });*/
        
        vm.selectEvent = function(event){
            eventsSelection.setSelection(event);
            vm.selectedEvents = eventsSelection.getSelection();
            $scope.selectedEvents = vm.selectedEvents;
            vm.event = vm.selectedEvents[0];
            $log.warn('Something goes wrong');
            $log.log('Log');
        };
        vm.incVote = function(event){
            event.vote = event.vote ? event.vote+1 : 1;
        };
        vm.decVote = function(event){
            event.vote = event.vote ? event.vote-1 : -1;
        };
        vm.doSearch = function(){
            vm.didSearchName = vm.searchName;
        };
        
        $scope.$watch('text', function(newVal){
            vm.text2 = newVal + 'aaaa';
        });

        $scope.$on('event1', function(){
            vm.text3 = 'bbbb';
        });
    };

    module.controller("eventsController", eventsController);
    
    module.filter("myDate", function($filter){
        return function(stringDate, format){
            return $filter('date')(new Date(stringDate), format);            
        };
    });

}(angular.module("app")));
