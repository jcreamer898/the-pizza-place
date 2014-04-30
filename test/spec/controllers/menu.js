'use strict';

describe('Controller: MenuCtrl', function () {

    // load the controller's module
    beforeEach(module('introToAngularApp'));

    var MenuCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        MenuCtrl = $controller('MenuCtrl', {
            $scope: scope,
            Menu: {
                query: function() {
                    return [{}, {}, {}];
                }
            }
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.items.length).toBe(3);
    });
});
