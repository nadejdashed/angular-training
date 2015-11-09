describe('listCatsControllerTest', function() {
    var scope;
    var mockCatsService;
    var catsDataMuckup;


    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope, $q) {
        catsDataMuckup = [
            {
                name:'John',
                src:'Artefacts/cat1.jpeg',
                vote:0
            },
            {
                name:'Mary',
                src:'Artefacts/cat2.jpeg',
                vote:0
            },
            {
                name:'Mike',
                src:'Artefacts/cat3.jpeg',
                vote:0
            },
            {
                name:'Adam',
                src:'Artefacts/cat4.jpeg',
                vote:0
            },
            {
                name:'Julie',
                src:'Artefacts/cat5.jpeg',
                vote:0
            }
        ]

        mockCatsService = {
            getCatsPromise: function () {
                return $q.resolve(catsDataMuckup);
            }
        };

        state = {
            go: function () {}
        }

        scope = $rootScope.$new();
        $controller('listCatsController', {$scope: scope, catsService: mockCatsService, $state: state});
    }));

    it('should fill list of cats', function () {
        scope.$digest();
        expect(scope.cats).toEqual(catsDataMuckup);
    });

    it('should change filter text', function() {
        var filterValue = 'test Filter';
        scope.applyFilter(filterValue);
        expect(scope.filterText).toEqual(filterValue);
    });

});