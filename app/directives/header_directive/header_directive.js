angular.module('header.directive', [])
    .directive('headerDirective', function(){
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                scope.header = function(){
                    return "directives/header_directive/header_directive.html"
                }
            },
            template: '<div class="header-directive" ng-include="header()"></div>'
        }
    });

