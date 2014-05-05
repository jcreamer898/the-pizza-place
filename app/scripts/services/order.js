'use strict';

angular.module('introToAngularApp')
    .factory('Order', function OrderService() {
        return {
            order: [],
            byItem: function(itemId) {
                return this.order.filter(function(o) {
                    return o.id === itemId;
                });
            },
            addToOrder: function(order) {
                this.order.push(order);
            },
            removeFromOrder: function(order) {
                this.order.splice(this.order.indexOf(order), 1);
            },
            calculateTotalItems: function() {
                return this.order.reduce(function(memo, o) {
                    return memo + parseInt(o.qty, 10);
                }, 0) || 0;
            }
        };
    });
