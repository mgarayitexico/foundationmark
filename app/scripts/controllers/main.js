'use strict';

/**
 * @ngdoc function
 * @name foundationMarkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foundationMarkApp
 */
angular.module('foundationMarkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
