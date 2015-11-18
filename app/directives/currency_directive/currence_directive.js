angular.module('currency.directive', [

])
    .directive('currencyDirective', function(){
        return {
            restrict:'E',
            scope: {
                flag:'@',
                name:'@',
                exchangeRate:'@',
                currencyIndex:'@'
            },
            link:function(scope, element, attrs) {
                scope.currency = function(){
                    return "directives/currency_directive/currency_directive.html"
                }
            },
            template:'<div class="currency-element" ng-include="currency()"></div>'
        }
    });