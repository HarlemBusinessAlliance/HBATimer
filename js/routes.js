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
    url: '/log_in',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('taskManager', {
    url: '/task_manager',
    templateUrl: 'templates/taskManager.html',
    controller: 'taskManagerCtrl'
  })

  .state('timer', {
    url: '/page7',
    templateUrl: 'templates/timer.html',
    controller: 'timerCtrl'
  })

$urlRouterProvider.otherwise('/landing_page')


});