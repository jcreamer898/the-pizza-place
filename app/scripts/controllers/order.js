'use strict';

function OrderController($scope, $routeParams, $location, Menu) {
    var orderId = $routeParams.id;

    $scope.order = [];
    $scope.totalItems = 0;
    $scope.$watchCollection('order', function() {
        $scope.totalItems = $scope.order.reduce(function(memo, o) {
            return memo + o.qty;
        }, 0);
    });

    $scope.addItem = function() {
        $scope.order.push({
            name: $scope.item.name,
            qty: 1,
            options: []
        });
    };

    $scope.addToCart = function() {
        $scope.$bus.publish({
            channel: 'orders',
            topic: 'order.new',
            data: {
                id: orderId
            }
        });
    };

    Menu.get({
            itemId: orderId
        })
        .$promise
        .then(function(item){
            $scope.item = item;
        })
        .catch(function(response) {
            if (response.status === 404) {
                $location.path('/menu');
            }
        });
}

OrderController.$inject = [
    '$scope',
    '$routeParams',
    '$location',
    'Menu'
];
angular.module('introToAngularApp')
    .controller('OrderCtrl', OrderController);
