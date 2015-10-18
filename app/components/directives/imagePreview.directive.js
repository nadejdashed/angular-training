angular.module('eventApp').directive('imagePreview', function(){
	return {
		templateUrl: '/templates/imagePreview.html',
		scope: {
			src: '=source'
		}
	}
});