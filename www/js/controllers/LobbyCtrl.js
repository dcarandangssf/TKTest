/*global angular*/

angular.module('starter.controllers')
    .controller('LobbyCtrl', ['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService', 'SSFUsersRest', '$window',
        function($scope, TKTestQuestionService, $state, TKAnswersService, SSFUsersRest, $window) {
            TKTestQuestionService.all();
            $scope.goToTest = function() {
                TKAnswersService.resetAnswers();
                $state.go('question', {
                    questionID: 1
                });
            };
            $scope.logout = function() {
                SSFUsersRest.logout($window.localStorage.token)
                    .then(function(response) {
                        // handle different responses and decide what happens next
                        $state.go('landing');
                    }, function(error) {
                        // inform the user of any known problems that arose, otherwise give a generic 
                        // failed message
                    });
            };
        }
    ]);