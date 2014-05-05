'use strict';

describe('Service: Order', function () {

    // load the service's module
    beforeEach(module('introToAngularApp'));

    // instantiate service
    var Order;
    beforeEach(inject(function (_Order_) {
        Order = _Order_;
    }));

    it('should be defined', function () {
        expect(!!Order).toBe(true);
    });

    it('should add items to the cart', function() {
        Order.addToOrder({
            name: 'foo',
            qty: 2
        });

        expect(Order.order.length).toBe(1);
    });

    it('should add items to the cart', function() {
        Order.addToOrder({
            name: 'foo',
            qty: 2
        });

        expect(Order.order.length).toBe(1);

        var order = Order.order[0];

        Order.removeFromOrder(order);

        expect(Order.order.length).toBe(0);
    });

    it('should calculate items', function() {
        Order.addToOrder({
            name: 'bar',
            qty: 2
        });
        Order.addToOrder({
            name: 'bar',
            qty: 1
        });

        expect(Order.calculateTotalItems()).toBe(3);
    });

});
