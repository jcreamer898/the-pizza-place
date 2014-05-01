/* global postal */
'use strict';

angular.module('introToAngularApp')
    .service('Bus', function Bus() {
        return postal;
    });
