angular.module('TKResultsButton', [])
    .service('TKResultsButtonService', function() {
        var service = this;
        var shouldShowButton = false;

        service.setShouldShowMenuButton = function(show) {
            shouldShowButton = show;
        };

        service.getShouldShowMenuButton = function() {
            return shouldShowButton;
        };
    });