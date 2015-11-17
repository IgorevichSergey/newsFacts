angular.module('articles.route', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.articles', {
                url: "/articles",
                views: {
                    "page": {
                        templateUrl: 'articles/articlesPage.html'
                    }
                }
            })
    });