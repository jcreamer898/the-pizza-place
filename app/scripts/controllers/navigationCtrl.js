'use strict';

angular.module('introToAngularApp')
    .controller('NavCtrl', function NavCtrl($scope, $rootScope, $location, routes) {
        var updateRoute;

        $scope.items = routes;

        updateRoute = function() {
            var route = $scope.items.map(function(item) {
                    item.active = false;
                    return item;
                }).
                filter(function(item) {
                    if ($location.path() === item.href ||
                        ($location.path().split('/')[1].indexOf(item.href) > -1)) {
                        return item;
                    }
                })[0];

            route.active = true;
        };

        $rootScope.$on('$locationChangeSuccess', updateRoute);
        updateRoute();
    });