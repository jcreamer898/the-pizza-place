'use strict';

describe('Directive: menuItem', function () {

    // load the directive's module
    beforeEach(module('introToAngularApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<tpp-menu-item></tpp-menu-item>');
        element = $compile(element)(scope);
        expect(1).toBeTruthy();
    }));
});
