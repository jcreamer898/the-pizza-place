'use strict';

angular.module('introToAngularApp')
    .factory('Menu', ['$resource', function($resource) {
        return $resource('api/menu/:itemId', {}, {
            query: {
                method:'GET',
                params: {
                    itemId: ''
                },
                isArray: true
            }
        });
    }]);
