(function () {
  'use strict';

  angular
    .module('reco.comment.directives')
    .directive('comment', comment);

  function comment(RecursionHelper) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/comment/_comment.html',
      replace: true,
      //scope: false,
      controller: 'CommentController',
      controllerAs: 'commentVM',
      compile: function(element) {
        // Use the compile function from the RecursionHelper,
        // And return the linking function(s) which it returns
        return RecursionHelper.compile(element);
      }
    }

    return directive;

  }

})();
