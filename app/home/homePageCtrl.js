angular.module('homePage.ctrl', [

])
    .controller('homePageCtrl', function(EXAMPLE_CONFIG){
        this.news_example = EXAMPLE_CONFIG.news;
    });