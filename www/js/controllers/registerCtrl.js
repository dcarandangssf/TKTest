angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', 'SSFUsersRest', '$http', '$state', '$window', '$ionicHistory',
        function($scope, SSFUsersRest, $http, $state, $window, $ionicHistory) {
            $scope.user = {};
            $scope.signupForm = function(form) {
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                SSFUsersRest.post($scope.user)
                    .then(function(response) {
                        // handle different responses and decide what happens next
                        $window.localStorage.userId = response.data.id;
                        $window.localStorage.token = response.data.token;

                        if (response.data === null) {
                            return alert("user is offline");
                        }
                        else if (response.status === 200) {
                            $ionicHistory.nextViewOptions({
                                historyRoot: true
                            });
                            $state.go('lobby');
                        }
                    }, function(error) {
                        // inform the user of any known problems that arose, otherwise give a generic 
                        // failed message

                        if (error.status === 404) {
                            return alert("not found");
                        }
                        else if (error.status === 422) {
                            return alert("email is already taken");
                        }
                        else if (error.status === 500) {
                            return alert("the world has ended, or the server just isn't online");
                        }
                    });
            };

        }
    ]);