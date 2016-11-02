angular.module("RESTServices")
    .service('QuestionsRest', ['$http',
        function($http) {
            var QuestionsRest = this;
            QuestionsRest.get = function(token) {
                return $http ({
                    headers: {
                        Authorization: token
                    },
                    url: 'https://strongloop-backend-dcarandangssf.c9users.io:8080/api/Questions',
                    method: 'GET'
                });
            
            };
        }

    ]);