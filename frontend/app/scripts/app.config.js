'use strict';
angular.module('yoApp').config(function($urlRouterProvider, $stateProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        templateUrl: '/views/main.html'
    });

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    });

    $stateProvider.state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
    });

    $stateProvider.state('jobs', {
        url: '/jobs',
        templateUrl: '/views/jobs.html',
        controller: 'JobsCtrl'
    });

    $httpProvider.interceptors.push('authInterceptor');
})
.constant('API_URL', 'http://localhost:3000');
