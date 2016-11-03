/*global angular*/

angular.module('starter.controllers')
    .controller('LandingCtrl', ['$window', '$scope', '$state',
        function($window, $scope, $state) {
            $window.localStorage.clear();
            $scope.goToLogin = function() {
                $state.go('login');
            };
        }
    ]);