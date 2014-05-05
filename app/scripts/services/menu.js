'use strict';

angular.module('introToAngularApp')
    .factory('Menu', function($resource) {
        return $resource('api/menu/:itemId', {}, {
            query: {
                method:'GET',
                params: {
                    itemId: ''
                },
                isArray: true
            }
        });
    });
