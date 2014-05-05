'use strict';

angular.module('introToAngularApp')
    .controller('MenuCtrl', function (Menu) {
        this.items = Menu.query();
    });
