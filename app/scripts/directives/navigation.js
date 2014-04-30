'use strict';

angular.module('introToAngularApp')
    .directive('navigation', function () {
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: '/templates/directives/navigation.html'
        };
    });
