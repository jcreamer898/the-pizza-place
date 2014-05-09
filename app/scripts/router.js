(function() {
    var routes = [{
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
        href: '/menu/:id',
        title: 'Order',
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
    }, {
        href: '/contact',
        text: 'Contact',
        title: 'Contact Us',
        templateUrl: 'views/contact.html',
        order: 2
    }];

    angular.module('introToAngularApp')
        .config(function ($routeProvider) {
            routes.forEach(function(r) {
                var route = {
                    title: r.title,
                    templateUrl: r.templateUrl,
                    controller: r.controller
                };

                if (r.controllerAs) {
                    route.controllerAs = r.controllerAs;
                }

                $routeProvider.when(r.href, route);
            });

            $routeProvider
                .otherwise({
                    redirectTo: '/'
                });
        })
        .run(function($rootScope) {
            $rootScope.page = {
                title: ''
            };

            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                $rootScope.page.title = current.title;
            });
        })
        .value('routes', routes);
}());