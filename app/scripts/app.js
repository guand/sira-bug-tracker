'use strict';

angular
  .module('siraBugTrackerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .constant('setting', {apiurl: 'http://localhost:3000'})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
