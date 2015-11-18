angular.module('articles.route', [
    'articlesPage.ctrl'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.articles', {
                url: "/articles",
                views: {
                    "page": {
                        templateUrl: 'articles/articlesPage.html',
                        controller: 'articlesPageCtrl',
                        controllerAs: 'articlesPageCtrl'
                    }
                }
            })
    });