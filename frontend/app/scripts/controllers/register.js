'use strict';

angular.module('yoApp')
  .controller('RegisterCtrl', function ($scope, $http, alert, authToken) {

    $scope.submit = function() {
      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $http.post(url, user)
        .success(function(res) {
          alert('success', 'Account created', 'Welcome, ' + res.user.email + '!');
          authToken.setToken(res.token);
        }).error(function() {
          alert('warning', 'Oops', 'Could not register');
        });
    };

  });
