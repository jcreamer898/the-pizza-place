'use strict';

angular.module('introToAngularApp')
    .controller('MenuCtrl', function ($scope, Menu) {
        this.items = Menu.query();

        $scope.$bus.subscribe({
            channel: 'new',
            topic: 'test',
            callback: function() {
                console.log('test');
            }
        });
    });
