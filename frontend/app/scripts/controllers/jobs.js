'use strict';
angular.module('yoApp').controller('JobsCtrl', function($scope, $http, API_URL, alert) {

  $http.get(API_URL + '/jobs')
    .success(function(res) {
      $scope.jobs = res;
    })
    .error(function(err) {
      alert('warning','Unable to get jobs',err.message);
    });
});
