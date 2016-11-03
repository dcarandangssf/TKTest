angular.module("RESTServices")
    .service('TestResultsRest', ['$http', '$window',
        function($http, $window) {
            var TestResultsRest = this;
            TestResultsRest.save = function(test, token) {
                return $http({
                    headers: {
                        Authorization: token
                    },
                    url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults",
                    method: 'POST',
                    data: test
                });
            };
            TestResultsRest.getAll = function(token) {
                return $http({
                    headers: {
                        Authorization: token
                    },
                    url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults?filter[where][userId]="+$window.localStorage.userId,
                    method: 'GET'
                });
            };
        }
    ]);