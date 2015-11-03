(function(module) {

    
    var widthFilter = function ($filter, $sce) {
        return function (input, options) {
            var result = $filter('emoticons')(input, options);
            var htmlFragmentText = $sce.getTrustedHtml(result);
            var el = document.createElement("div");
            el.innerHTML = htmlFragmentText;

            var matches = el.querySelectorAll("i.emoticon, i.icon-emoticon");

            //var element = angular.element(el)
            //debugger
            //console.log('querySelectorAll matches:', matches ,'\n native el :', el)

            return result
        }
    }

    module.filter("widthFilter", widthFilter);

}(angular.module("app")));