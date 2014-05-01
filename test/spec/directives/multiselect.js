'use strict';

describe('Directive: multiselect', function () {

    // load the directive's module
    beforeEach(module('introToAngularApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.items = [{}, {}];
    }));

    it('should create 2 options, and call multiselect', inject(function ($compile) {
        jQuery.fn.multiselect = jasmine.createSpy();
        element = angular.element('<multiselect items="items" selected="selected"></multiselect>');

        element = $compile(element)(scope);

        scope.$apply();

        expect(element.find('option').length).toBe(2);
        expect(jQuery.fn.multiselect).toHaveBeenCalled();
    }));
});
