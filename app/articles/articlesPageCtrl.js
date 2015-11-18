angular.module('articlesPage.ctrl', [

])
    .controller('articlesPageCtrl', function(EXAMPLE_CONFIG){
        this.test_news = EXAMPLE_CONFIG.news;
    });