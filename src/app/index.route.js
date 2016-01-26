(function() {
  'use strict';

  angular
    .module('reco')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/app/main/main.html',
        abstract: true
      })
      .state('main.home', {
        url: '',
        templateUrl: '/app/main/_home.html',
      })
      .state('main.post', {
        url: 'post',
        templateUrl: '/app/post/_post.html',
        controller: 'PostController',
        controllerAs: 'postVM'
      })
      .state('main.submit', {
        url: 'submit',
        templateUrl: '/app/post/_post.submit.html',
        //controller: 'PostController',
        //controllerAs: 'postVM'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
