'use strict';

angular.module('introToAngularApp')
    .directive('tppNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/directives/navigation.html',
            scope: true
        };
    });
