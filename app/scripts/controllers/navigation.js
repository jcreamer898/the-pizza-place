'use strict';

angular.module('introToAngularApp')
    .controller('NavController', ['$scope', function($scope) {
        $scope.items = [{
            href: '/',
            title: 'Home',
            order: 0
        }, {
            href: '/menu',
            title: 'Menu',
            order: 1
        }, {
            href: '/contact',
            title: 'Contact',
            order: 2
        }];
    }]);