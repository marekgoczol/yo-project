'use strict';
angular.module('yoApp').controller('headerCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
