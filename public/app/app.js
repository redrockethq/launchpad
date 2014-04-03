'use strict';

angular.module('app', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', { controller: 'HomeCtrl', templateUrl: '/app/core/views/home.html'})
      .when('/orders', { controller: 'OrdersCtrl', templateUrl: '/app/orders/views/all.html'})
      .when('/errors/400', { controller: 'ErrorCtrl', templateUrl: '/app/core/views/404.html'})
      .otherwise({ redirectTo: '/errors/404'});

    $locationProvider.hashPrefix('!');

  }])
  .controller('HomeCtrl', ['$scope',
    function ($scope) {

    }])
  .controller('ErrorCtrl', ['$scope',
    function ($scope) {

    }])
  .controller('OrdersCtrl', ['$scope',
    function ($scope) {

    }]);