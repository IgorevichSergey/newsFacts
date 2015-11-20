angular.module('contactUs.route', [
    'contactUsPage.ctrl'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.contactUs', {
                url: "/contactUs",
                views: {
                    "page": {
                        templateUrl: 'contactUs/contactUsPage.html',
                        controller:'contactUsPageCtrl',
                        controllerAs:'contactUsPageCtrl'
                    }
                }
            })
    });