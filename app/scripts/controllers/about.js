'use strict';

/**
 * @ngdoc function
 * @name foundationMarkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the foundationMarkApp
 */
angular.module('foundationMarkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
