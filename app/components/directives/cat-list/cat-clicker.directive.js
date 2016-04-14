(function(module) {

	var catClickerDirective = function(catService) {
		return {
			restrict: 'E',
			templateUrl: './app/components/directives/cat-list/cat-clicker.template.html',
			scope: {
				cats: '=ngModel'
			},
			link: function(scope, element, attrs, ctrl) {
				scope.selected = scope.cats[0];
				scope.orderType = 'name';
				scope.rating = {
					positive: [],
					negative: [],
					neutral: []
				};

				scope.formattedRating = {
					positive: '',
					negative: '',
					neutral: ''
				};

				scope.selectCat = function(id) {
					catService.getSingleCat(id)
						.then(function(data) {
							scope.selected = data;
							scope.selected.viewed = true;

							scope.edited = scope.selected;
						});
				}

				scope.formatRating = function() {
					for(var rate in scope.rating) {
						var ratedItems = scope.rating[rate];
						if(ratedItems.length) {
							if(ratedItems.length === 1) {
								scope.formattedRating[rate] = 'Only ' + ratedItems[0].name + ' has ' + rate + ' votes.';
							} else {
								scope.formattedRating[rate] = ratedItems[0].name +
															' and ' + (ratedItems.length - 1) +
															' more have ' + rate + ' votes.';
							}
						} else {
							scope.formattedRating[rate] = 'There are no cats with ' + rate + ' votes.';
						}
					}
				}

				scope.updateRating = function() {
					scope.rating = {
						positive: [],
						negative: [],
						neutral: []
					};
					
					scope.cats.forEach(function(cat, index) {
						if(cat.vote) {
							if(cat.vote > 0) {
								scope.rating.positive.push(cat);
							} else {
								scope.rating.negative.push(cat);
							}
						} else {
							scope.rating.neutral.push(cat);
						}
					});

					scope.formatRating();
				}

				scope.$watch('cats', scope.updateRating, true);
			}
		}
	}

	module.directive('catClicker', catClickerDirective);

}(angular.module('app')));
