angular.module('newsFacts', [
    'ui.router',
    'templates',
    'baseView.route'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    });