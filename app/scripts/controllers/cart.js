'use strict';

angular.module('introToAngularApp')
    .controller('CartCtrl', function ($scope, Order) {
        $scope.totalItems = Order.calculateTotalItems();
        $scope.cartItems = Order.order;

        $scope.$bus.subscribe({
            channel: 'orders',
            topic: 'order.new',
            callback: function() {
                $scope.totalItems = Order.calculateTotalItems();
            }
        });
    });
