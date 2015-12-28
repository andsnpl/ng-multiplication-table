'use strict';

/* global angular */

angular.module('myApp', [])
  .controller('MultiplicationCtrl', [
    '$scope',
    function ($scope) {
      $scope.xMin = 1;
      $scope.yMin = 1;
      $scope.xMax = 10;
      $scope.yMax = 10;
      $scope.range = function (min, max, step) {

        isNaN(step) && (step = 1);
        isNaN(max) && (max = min, min = 0);

        max += step;

        var size = max - min,
            len = Math.ceil(size / step);
        return Array.apply(null, new Array(len)).map(function (_, i) {
          return (i * step) + min;
        });
      };
    }
  ]);
