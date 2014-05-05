'use strict';

describe('Controller: NavCtrl', function () {

    // load the controller's module
    beforeEach(module('introToAngularApp'));

    var NavCtrl,
        scope,
        path = '/';

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.page = {
            title: ''
        };
        NavCtrl = $controller('NavCtrl', {
            $scope: scope,
            $rootScope: scope,
            $location: {
                path: function() {
                    return path;
                }
            },
            routes: [{
                href: '/',
                title: 'Home',
                active: false
            }, {
                href: 'foo',
                title: 'Foo',
                active: false
            }]
        });
    }));

    it('should set the homepage as active', function () {
        expect(scope.items[0].active).toBeTruthy();
    });

    it('should set another page as active', function () {
        path = '/foo';
        scope.$emit('$locationChangeSuccess');
        expect(scope.items[1].active).toBeTruthy();
    });

    it('should set another page with params as active', function () {
        path = '/foo/bar';
        scope.$emit('$locationChangeSuccess');
        expect(scope.items[1].active).toBeTruthy();
    });

    it('should do async', function(done) {
        setTimeout(function() {
            expect(true).toBeTruthy();
            done();
        }, 10   );
    });

});
