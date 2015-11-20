angular.module('contactUsPage.ctrl', [

])
    .controller('contactUsPageCtrl', function(EXAMPLE_CONFIG){
        var self = this;
        self.faq = EXAMPLE_CONFIG.faq;
        self.news_example = EXAMPLE_CONFIG.news;
        self.currentAnswer = 0;
    });