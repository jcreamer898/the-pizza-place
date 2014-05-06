/* global postal */
'use strict';

angular.module('introToAngularApp')
    .config(function ($provide) {
        $provide.decorator('$rootScope', ['$delegate', function ($delegate) {
            Object.defineProperty($delegate.constructor.prototype, '$bus', {
                get: function() {
                    var self = this;

                    return {
                        subscribe: function() {
                            var sub = postal.subscribe.apply(postal, arguments);

                            self.$on('$destroy', function() {
                                sub.unsubscribe();
                            });
                        },
                        channel: postal.channel,
                        publish: postal.publish
                    };
                },
                enumerable: false
            });

            return $delegate;
        }]);
    });
