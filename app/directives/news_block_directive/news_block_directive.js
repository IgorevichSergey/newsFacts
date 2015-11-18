angular.module('news_block.directive', [])
    .directive('newsBlockDirective', function(){
        return {
            restrict: 'E',
            scope:{
                news:'='
            },
            link: function(scope, element, attrs) {
                scope.news_block = function(){
                    return "directives/news_block_directive/news_block_directive.html"
                }
            },
            template: '<div class="news-block-directive" ng-include="news_block()"></div>'
        }
    });

