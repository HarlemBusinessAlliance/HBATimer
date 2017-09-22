angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('back', {
    url: '/landing_page',
    templateUrl: 'templates/back.html',
    controller: 'backCtrl'
  })

  .state('signUp', {
    url: '/sign_up',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('logIn', {
    url: '/page5',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('page', {
    url: '/page6',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/landing_page')


});