'use strict';

angular.module('introToAngularApp')
    .directive('navigation', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/directives/navigation.html',
            scope: true
        };
    });
