(function(module) {

	var eventsService = function ($q, $timeout, $resource, $http, numberFilter) {
		var events = [{
			id: 1,
			name: 'Angular Training',
			src: 'https://angularjs.org/img/AngularJS-large.png',
			trainer: 'Nadzeya Shedava',
			date: '2015.10.12',
			tags: ['JS', 'Framework', 'Frontend'],
			//vote: 0
		}, {
			id: 2,
			name: '.Net intro',
			src: 'https://upload.wikimedia.org/wikipedia/fr/9/99/Logo_microsoft_net.png',
			trainer: 'Egor Tichonov',
			date: '2014.10.12',
			tags: ['Backend', 'Framework'],
			//vote: 0
		}, {
			id: 3,
			name: 'PHP in depth',
			src: 'http://uskov.com.ua/wp-content/uploads/2015/04/php-elephant.png',
			trainer: 'Alexandr Efimov',
			date: '2015.09.15',
			tags: ['Backend'],
			//vote: 0
		}, {
			id: 4,
			name: 'News in Drupal',
			src: 'http://www.activemedia.by/i/drupal_1.png',
			trainer: 'Alexandr Efimov',
			date: '2014.12.27',
			tags: ['Backend', 'CMS'],
			//vote: 0
		}];

		var Cat = $resource('/cats/:id', {'id': '@id'}, {
			'update': { method:'PUT' }
		});

		var str = numberFilter(40, 2);
		console.log(str);

		function getData(){
			/*var cats = Cat.query();
			console.log(cats);
			return cats;*/

			return $http.get('/cats').then(function(resp){
				return resp.data;
			});
		}

		function getEventById(id){
			return $http.get('/cats/'+id).then(function(resp){
				return resp.data;
			});
		}

		function saveData(cat){
			cat.vote += 1;
			cat.$update();
		}

		function editData(cat){
			return $http.put('/cats/'+cat.id, cat).then(function(resp){
				return resp.data;
			});
		}

		return {
			getData: getData,
			getEventById: getEventById,
			saveData: saveData,
			editData: editData
		};
	};

	module.service("eventsService", eventsService);

}(angular.module("app")));