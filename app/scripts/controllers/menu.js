'use strict';

angular.module('introToAngularApp')
    .controller('MenuCtrl', ['$scope', 'Menu', function ($scope, Menu) {
        $scope.items = Menu.query();
    }]);
