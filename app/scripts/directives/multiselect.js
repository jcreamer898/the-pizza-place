'use strict';

angular.module('introToAngularApp')
    .directive('multiselect', function () {
        return {
            template: '<select ng-model="selected" ng-options="item.name for item in items" class="multiselect" multiple="multiple"></select>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                selected: '='
            },
            link: function postLink(scope, element) {
                scope.$watch('items', function () {
                    element.multiselect();
                }, true);
            }
        };
    });
