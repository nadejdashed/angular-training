describe('clickCountFilterTest', function(){
    var $filter;

    angular.module("alertsModule", []);

    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('should be positive smile', function(){
        var result = $filter('clickCountFilter')(10);
        expect(result).toBe(':)');
    });

    it('should serious face', function(){
        var result = $filter('clickCountFilter')(0);
        expect(result).toBe(':|');
    });

    it('should be sad', function(){
        var result = $filter('clickCountFilter')(-3);
        expect(result).toBe(':(');
    });

});