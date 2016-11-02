angular.module('TKTestAnswers', [])
    .service('TKAnswersService', ['$window', 'TestResultsRest',
        function($window, TestResultsRest) {
            var service = this;
            var answerCategories = {
                "competing": 0,
                "collaborating": 0,
                "compromising": 0,
                "avoiding": 0,
                "accommodating": 0
            };
            var categoriesStack = [];

            service.getAnswers = function() {
                return answerCategories;
            };

            service.saveAnswer = function(answerCategory) {
                answerCategories[answerCategory.toLowerCase()]++;
                categoriesStack.push(answerCategory);
            };

            service.resetAnswers = function() {
                for (var property in answerCategories) {
                    if (answerCategories.hasOwnProperty(property)) {
                        answerCategories[property] = 0;
                    }
                }
            };

            service.eraseLastAnswer = function() {
                answerCategories[categoriesStack.pop().toLowerCase()]--;
            };

            service.saveTest = function(test, token) {
                // var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
                // tempTests.push(test);
                // $window.localStorage.tests = JSON.stringify(tempTests);
                // var test = $window.localStorage.tests;

                TestResultsRest.save(test, token)
                    .then(function(response) {

                    }, function(error) {

                    });
            };

            service.getTests = function(token) {

                // return $window.localStorage.tests ? JSON.parse($window.localStorage.tests) : [];

                return TestResultsRest.getAll(token);

            };

            service.setAnswers = function(answers) {
                answerCategories = answers;
            };
        }
    ]);