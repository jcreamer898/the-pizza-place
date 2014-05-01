'use strict';

angular.module('introToAngularApp')
    .controller('CartCtrl', function ($scope) {
        $scope.cartItems = [];

        $scope.$bus.subscribe({
            channel: 'orders',
            topic: 'order.new',
            callback: function(data) {
                $scope.cartItems.push(data);
            }
        });
    });
