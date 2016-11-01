angular.module("RESTServices", [])
    .service('SSFUsersRest', ['$http',
        function($http) {
            var SSFUsersRest = this;
            SSFUsersRest.post = function(newUserData) {
                return $http({
                    url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/SSFUsers",
                    method: "POST",
                    data: newUserData
                });
            };
            SSFUsersRest.login = function(currentUserData) {
                return $http({
                    url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/SSFUsers/login",
                    method: "POST",
                    data: currentUserData
                });
            };
        }
    ]);