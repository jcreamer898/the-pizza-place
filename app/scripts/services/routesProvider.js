angular.module('introToAngularApp')
    .provider('routes', function() {
        this.$get = function() {
            return [{
                href: '/',
                text: 'Home',
                title: 'Home',
                active: true,
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                order: 0
            }, {
                href: '/menu',
                text: 'Menu',
                title: 'Our Menu',
                templateUrl: 'views/menu.html',
                controller: 'MenuCtrl',
                controllerAs: 'menu',
                order: 1
            }, {
                href: '/contact',
                text: 'Contact',
                title: 'Contact Us',
                templateUrl: 'views/contact.html',
                order: 2
            }];
        };
    });