angular.module('home.route', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.home', {
                url: "/home",
                views: {
                    "page": {
                        templateUrl: 'home/homePage.html'
                    }
                }
            })
    });