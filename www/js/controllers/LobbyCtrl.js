angular.module('starter.controllers')
 .controller('LobbyCtrl', ['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService',
  function($scope, TKTestQuestionService, $state, TKAnswersService) {
   TKTestQuestionService.all();
   $scope.goToTest = function() {
    TKAnswersService.resetAnswers();
    $state.go('question', {
     questionID: 1
    });
   };
  }
 ]);