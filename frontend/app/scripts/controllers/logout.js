'use strict';

angular.module('yoApp')
  .controller('LogoutCtrl', function ($scope, $state, authToken) {

    authToken.removeToken();
    $state.go('main');

  });
