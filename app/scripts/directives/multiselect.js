'use strict';

angular.module('introToAngularApp')
    .directive('multiselect', function () {
        return {
            template: '<select ng-model="selected" ng-options="item.id as item.name for item in items" class="multiselect" multiple="multiple"></select>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                selected: '='
            },
            link: function postLink(scope, element) {
                scope.$watch('items', function () {
                    /* Dealing with a nasty race condition, hoping to get rid of this later */
                    if (!scope.items) {
                        return;
                    }

                    element.multiselect();
                }, true);
            }
        };
    });
