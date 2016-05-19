describe('the first testing', function() {
    it('should be true', function() {
        expect(true).toBe(true);
    });
});

describe('the filter message', function() {
    var catInfo;
    
    beforeEach(module('app'));
    beforeEach(inject(function($filter){
        catInfo = $filter('catInfo');
    }));
    
    it('should return a message', function() {
        var arr = [
            {vote: 0}
        ];
        
        expect(catInfo(arr)).toBe('No cat has a positive vote from the current list');
    });
});

describe('the mainController', function() {
    var mainController;

    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        mainController = $controller('mainController', {$scope: $scope});
    }));

    describe('$scope.sortCats', function() {
        it('should return true', function() {
            expect($scope.sortCats({name: 'b'}, {name: 'A'})).toBe(1);
        })
    });
});