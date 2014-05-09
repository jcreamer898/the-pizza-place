'use strict';

angular.module('introToAngularApp')
    .directive('tppNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/directives/navigation.html',
            replace: true,
            controller: "NavCtrl",
            link: function(scope, element) {
                console.log(element);
            }
        };
    });
