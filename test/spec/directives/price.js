'use strict';

describe('Directive: price', function () {

    // load the directive's module
    beforeEach(module('introToAngularApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<price price="9.99"></price>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('$9.99');
    }));
});
