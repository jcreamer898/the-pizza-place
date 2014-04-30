'use strict';

angular.module('introToAngularApp')
    .directive('price', function () {
        return {
            template: '<small></small>',
            restrict: 'E',
            scope: {
                price: '@price'
            },
            link: function (scope, element) {
                scope.$watch('price', function() {
                    var price = parseFloat(scope.price).toFixed(2);
                    element.text(['$', price].join(''));
                });
            }
        };
    });
