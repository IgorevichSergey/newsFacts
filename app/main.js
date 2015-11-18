angular.module('newsFacts', [
    'ui.router',
    'templates',
    'baseView.route'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    })
    .constant("EXAMPLE_CONFIG", {
        news:{
            image:'images/contentBlockImg.png',
            description:'Israel Bolsters Security in East Jerusalem After Violence',
            type:'Politics',
            reuters:'Reuters',
            time:'12:32 PM',
            date:'11 jan 2018',
            countryName:'Japan',
            countryFlag:'images/flags/Japan.png',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
    });