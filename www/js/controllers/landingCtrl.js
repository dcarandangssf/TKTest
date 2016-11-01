/*global angular*/

angular.module('starter.controllers')
    .controller('LandingCtrl', ['$scope', '$state',
        function($scope, $state) {
            $scope.goToLogin = function() {
                $state.go('login')
            };
        }
    ]);