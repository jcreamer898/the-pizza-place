angular.module('introToAngularApp')
    .value('routes', [{
        href: '/',
        text: 'Home',
        title: 'Home',
        active: true,
        order: 0
    }, {
        href: 'menu',
        text: 'Menu',
        title: 'Our Menu',
        order: 1
    }, {
        href: 'contact',
        text: 'Contact',
        title: 'Contact Us',
        order: 2
    }]);