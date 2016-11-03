angular.module('starter.controllers')
    .controller('LoginCtrl', ['$scope', '$state', '$window', 'SSFUsersRest', '$ionicHistory',
        function($scope, $state, $window, SSFUsersRest, $ionicHistory) {
            $scope.user = {};
            $scope.login = function(form) {
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                SSFUsersRest.login($scope.user)
                    .then(function(response) {
                        $window.localStorage.userId = response.data.userId;
                        $window.localStorage.token = response.data.id;
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
                        if (error.status === 401) {
                            return alert("password is incorrect");
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
