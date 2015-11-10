describe('listCatsControllerTest', function() {
    var scope;
    var catsDataMuckup = [
        {
            id:0,
            name:'John',
            src:'Artefacts/cat1.jpeg',
            vote:0
        },
        {
            id:1,
            name:'Mary',
            src:'Artefacts/cat2.jpeg',
            vote:0
        },
        {
            id:2,
            name:'Mike',
            src:'Artefacts/cat3.jpeg',
            vote:0
        },
        {
            id:3,
            name:'Adam',
            src:'Artefacts/cat4.jpeg',
            vote:0
        },
        {
            id:4,
            name:'Julie',
            src:'Artefacts/cat5.jpeg',
            vote:0
        }
    ];
    var state;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope, $q, $state, catsService) {

        spyOn(catsService, "getCatsPromise")
            .and
            .callFake(function () {
                return $q.resolve(catsDataMuckup);
            });

        state = $state;
        spyOn(state, "go")
            .and
            .callFake( function () {});

        scope = $rootScope.$new();
        $controller('listCatsController', {$scope: scope, catsService: catsService, $state: state});
    }));

    it('should fill list of cats', function () {
        scope.$digest();
        expect(scope.cats).toEqual(catsDataMuckup);
    });

    it('should set selectedCat', function () {
        scope.$digest();
        expect(scope.selectedCat).toEqual(scope.cats[0]);
    });

    it('should change state to listView.vote', function () {
        scope.$digest();
        expect(state.go).toHaveBeenCalledWith('listView.vote', {id : scope.cats[0].id});
    });

    it('should change filter text', function() {
        var filterValue = 'test Filter';
        scope.applyFilter(filterValue);
        expect(scope.filterText).toEqual(filterValue);
    });
});