'use strict';

angular.module('introToAngularApp')
    .controller('OrderCtrl', ['$scope', '$routeParams', 'Menu', '$location', function ($scope, $routeParams, Menu, $location) {
        $scope.order = function() {
            console.log('order!!');
        };

        Menu.get({
            itemId: $routeParams.id
        })
        .$promise
            .then(function(item){
                $scope.item = item;
            })
            .catch(function(response) {
                if (response.status === 404) {
                    $location.path('/menu');
                }
            });
    }]);
