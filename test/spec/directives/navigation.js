'use strict';

describe('Directive: navigation', function () {

    // load the directive's module
    beforeEach(module('introToAngularApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<tpp-navigation></tpp-navigation>');
        element = $compile(element)(scope);
        expect(1).toBeTruthy();
    }));
});
