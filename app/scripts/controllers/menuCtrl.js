'use strict';

angular.module('introToAngularApp')
    .controller('MenuCtrl', function ($scope, Menu) {
        this.items = Menu.query();
    });
