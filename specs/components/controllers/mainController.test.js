describe('mainControllerTest', function(){
    var scope,
        testData,
        filter;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope, $filter){
        scope = $rootScope.$new();
        filter = $filter;

        $controller('mainController', {$scope: scope, cats:{}});

        testData = [
            {
                "id": 1,
                "name": "Alex family",
                "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
                "vote": 0
            },
            {
                "id": 2,
                "name": "Viktor",
                "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
                "vote": 3
            },
            {
                "id": 3,
                "name": "Albert",
                "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
                "vote": 0
            },
            {
                "id": 4,
                "name": "Lia",
                "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
                "vote": 5
            }];

        scope.cats = testData;

    }));

    it('Data should be correct!', function(){
        expect(scope.cats.length).toBe(testData.length);
    });

    it('Data should be ordered by name!', function(){
        scope.cats = filter ("orderBy")(scope.cats, '-name', true);
        expect(scope.cats[0].name).toBe('Albert');
    });

    it('Data should be ordered by vote!', function(){
        scope.cats = filter ("orderBy")(scope.cats, '-vote', false);
        expect(scope.cats[0].name).toBe('Lia');
    });

    it('Should be saved search term!', function(){
        scope.searchCat('Vi');
        expect(scope.searchTerm).toBe('Vi');
    });

    it('Vote should be increased!', function(){
        var cat = scope.cats[2];
        scope.increaseVote(cat);
        expect(scope.cats[2].vote).toEqual(1);
    });

    it('Vote should be reduced!', function(){
        var cat = scope.cats[3];
        scope.reduceVote(cat);
        expect(scope.cats[3].vote).toEqual(4);
    });

});
