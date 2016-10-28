angular.module('starter.controllers')
    .controller('ResultsCtrl', ['$scope', 'TKAnswersService', '$ionicHistory', '$state', 'TKResultsButtonService',
        function($scope, TKAnswersService, $ionicHistory, $state, TKResultsButtonService) {

            $scope.shouldShowButton = TKResultsButtonService.getShouldShowMenuButton();

            $scope.menuButtonTapped = function() {
                $ionicHistory.nextViewOptions({
                    historyRoot: true,
                    disableBack: true
                });
                $state.go('lobby');
            };
            
            $scope.labels = ["Competing", "Collaborating", "Compromising", "Avoiding", "Accommodating"];

            var answersInfo = TKAnswersService.getAnswers();
            
            function returnPercentage(value) {
                return (value / 12) * 100;
            }

            $scope.data = [
                [
                    returnPercentage(answersInfo["competing"]),
                    returnPercentage(answersInfo["collaborating"]),
                    returnPercentage(answersInfo["compromising"]), 
                    returnPercentage(answersInfo["avoiding"]), 
                    returnPercentage(answersInfo["accommodating"])
                ]
            ];
            
            $scope.options = {
                scaleIntegersOnly: true,
                animation: false,
                responsive: true,
                maintainAspectRatio: false,
                scaleOverride: true,
                scaleSteps: 4,
                scaleStepWidth: 25,
                scaleStartValue: 0,
                scaleLabel: "<%=value%>" + "%",
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value.toFixed(0) %>" + "%",
            };

            $scope.colours = [{
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(15,187,25,1)",
                pointColor: "rgba(15,187,25,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)"
            }];
        }
    ]);