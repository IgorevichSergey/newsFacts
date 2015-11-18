angular.module('home.route', [
    'homePage.ctrl'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.home', {
                url: "/home",
                views: {
                    "page": {
                        templateUrl: 'home/homePage.html',
                        controller: 'homePageCtrl',
                        controllerAs: 'homePageCtrl'
                    }
                }
            })
    });