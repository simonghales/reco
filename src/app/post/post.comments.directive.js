(function () {
  'use strict';

  angular
    .module('reco.post.directives')
    .directive('comments', comments);

  function comments() {

    var directive = {
      restrict: 'E',
      templateUrl: '/app/post/_post.comments.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
