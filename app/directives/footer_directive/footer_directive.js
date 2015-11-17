angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                scope.footer = function(){
                    return "directives/footer_directive/footer_directive.html"
                };
            },
            template: '<div class="footer-directive" ng-include="footer()"></div>'
        }
    });


