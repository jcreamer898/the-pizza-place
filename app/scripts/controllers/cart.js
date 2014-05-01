'use strict';

angular.module('introToAngularApp')
    .controller('CartCtrl', function ($scope) {
        $scope.totalItems = 0;
        $scope.cartItems = [];

        $scope.$bus.subscribe({
            channel: 'orders',
            topic: 'order.new',
            callback: function(data) {
                if (!_.isArray(data)) {
                    data = [data];
                }

                $scope.cartItems = $scope.cartItems.concat(data);

                $scope.totalItems = $scope.cartItems.reduce(function(memo, item) {
                    return memo + (+item.qty);
                }, 0);
            }
        });
    });
