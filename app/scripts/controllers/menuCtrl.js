'use strict';

angular.module('introToAngularApp')
    .controller('MenuCtrl', function ($scope, Menu) {
        $scope.items = Menu.query();
    });
