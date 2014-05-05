'use strict';

function OrderController($scope, $routeParams, $location, Menu, Order) {
    $scope.itemId = $routeParams.id;

    $scope.order = Order.order;
    $scope.totalItems = Order.calculateTotalItems();

    $scope.isItem = function(item) {
        return item.id === +$scope.itemId;
    };

    $scope.addItem = function() {
        Order.addToOrder({
            name: $scope.item.name,
            qty: 1,
            options: [],
            id: $scope.item.id
        });

        $scope.calculateTotal();
    };

    $scope.calculateTotal = function() {
        $scope.totalItems = Order.calculateTotalItems();

        $scope.$bus.publish({
            channel: 'orders',
            topic: 'order.new'
        });
    };

    $scope.removeItem = function(item) {
        Order.removeFromOrder(item);

        $scope.calculateTotal();
    };

    Menu.get({
            itemId: $scope.itemId
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

angular.module('introToAngularApp')
    .controller('OrderCtrl', OrderController);
