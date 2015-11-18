angular.module('baseView.route', [
    'header.directive',
    'footer.directive',
    'time_block.directive',
    'news_block.directive',
    'home.route',
    'articles.route'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base', {
                url: "",
                templateUrl: 'baseView/baseView.html',
                abstract: true
            })
    });