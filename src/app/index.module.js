(function() {
  'use strict';

  angular
    .module('reco', [

      'reco.content',

      'ngAnimate',
      'ngSanitize',
      'restangular',
      'ui.router',
      'toastr'
    ]);

  // Content

  angular.module('reco.content', [
    'reco.content.controllers',
    'reco.content.directives'
  ]);

  angular.module('reco.content.controllers', []);
  angular.module('reco.content.directives', []);


})();
