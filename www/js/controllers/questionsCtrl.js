angular.module('starter.controllers')
.controller('QuestionsCtrl',['$scope', '$stateParams', 'testInfo', 'TKAnswersService', '$state', '$ionicHistory',
function($scope, $stateParams, testInfo, TKAnswersService, $state, $ionicHistory) {
}]);

$scope.qNumber = $stateParams.questionID;

testInfo.forEach(function(infoDict) {
     if(infoDict.Answer_ID === "A")
          $scope.questionA = infoDict;
     if(infoDict.Answer_ID === "B")
          $scope.questionB = infoDict;
});

$scope.buttonClicked = function ( option ) {
        var category = $scope["question" + option].Style;
        TKAnswersService.saveAnswer(category);
       
        if($scope.qNumber == 30) {
           performRequest();
        }
        else {
          var nextqNumber = Number($scope.qNumber) + 1;
          $state.go('question', {questionID: nextqNumber});
        }
};

$scope.goBack = function() {
      if($scope.qNumber >1)
        TKAnswersService.eraseLastAnswer();
      $ionicHistory.goBack();
 };
 
 function performRequest() {
    var answersDict = angular.copy(TKAnswersService.getAnswers());
    var date = new Date();
    answersDict["createDate"] = date.toUTCString();
    TKAnswersService.saveTest(answersDict);
    $ionicHistory.nextViewOptions({
         historyRoot: true
    });
    $state.go('lobby');
}

