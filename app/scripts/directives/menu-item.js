'use strict';

angular.module('introToAngularApp')
    .directive('menuItem', function () {
        return {
            templateUrl: '/templates/directives/menuItem.html',
            restrict: 'E',
            replace: true,
            scope: {
                item: '='
            }
        };
    });
