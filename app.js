'use strict';

/* global angular */

angular.module('myApp', [])
  .controller('MultiplicationCtrl', [
    '$scope', '$attrs',
    function ($scope, $attrs) {
      $scope.xMin = $attrs.xMin || 1;
      $scope.yMin = $attrs.yMin || 1;
      $scope.xMax = $attrs.xMax || 10;
      $scope.yMax = $attrs.yMax || 10;

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

      $scope.compute = function (a, b) {
        return a * b;
      };
    }
  ]);
