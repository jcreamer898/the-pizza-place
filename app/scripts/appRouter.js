angular.module('introToAngularApp')
    .config(function ($routeProvider, routesProvider) {
        routesProvider.$get().forEach(function(r) {
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
    });