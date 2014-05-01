/* global postal */
'use strict';

angular.module('introToAngularApp')
    .config(function ($provide) {
        $provide.decorator('$rootScope', ['$delegate', function ($delegate) {
            Object.defineProperty($delegate.constructor.prototype, '$bus', {
                value: postal,
                enumerable: false
            });

            return $delegate;
        }]);
    });
