'use strict';

angular.module('yoApp')
  .directive('validateEquals', function () {
    return {
      require: 'ngModel',
      link: function($scope, $element, $attrs, $ctrl) {
        function validateEquals(value) {
          var valid = (value === $scope.$eval($attrs.validateEquals));
          $ctrl.$setValidity('equal', valid);
          return valid ? value : undefined;
        }

        $ctrl.$parsers.push(validateEquals);
        $ctrl.$formatters.push(validateEquals);

        $scope.$watch($attrs.validateEquals, function() {
          $ctrl.$setViewValue($ctrl.$viewValue);
        });
      }
    };
  });
