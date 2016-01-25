(function() {
  'use strict';

  angular
    .module('reco', [

      'reco.general',
      'reco.content',
      'reco.post',
      'reco.comment',

      'ngAnimate',
      'ngSanitize',
      'restangular',
      'ui.router',
      'toastr'
    ]);

  // General

  angular.module('reco.general', [
    'reco.general.controllers',
    'reco.general.directives'
  ]);

  angular.module('reco.general.controllers', []);
  angular.module('reco.general.directives', []);

  // Content

  angular.module('reco.content', [
    'reco.content.controllers',
    'reco.content.directives'
  ]);

  angular.module('reco.content.controllers', []);
  angular.module('reco.content.directives', []);

  // Post

  angular.module('reco.post', [
    'reco.post.controllers',
    'reco.post.directives'
  ]);

  angular.module('reco.post.controllers', []);
  angular.module('reco.post.directives', []);

  // Comment

  angular.module('reco.comment', [
    'reco.comment.controllers',
    'reco.comment.directives'
  ]);

  angular.module('reco.comment.controllers', []);
  angular.module('reco.comment.directives', []);


})();
