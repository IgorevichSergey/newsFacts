angular.module('time_block.directive', [])
    .directive('timeBlockDirective', function(){
        return {
            restrict: 'E',
            scope:{
                dirTime:'@',
                dirDate:'@',
                dirReuters:'@'
            },
            link: function(scope, element, attrs) {
                scope.time_block = function(){
                    return "directives/time_block_directive/time_block_directive.html"
                }
            },
            template: '<div class="time-block-directive" ng-include="time_block()"></div>'
        }
    });

