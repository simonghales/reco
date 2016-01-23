(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('selfPostCard', selfPostCard);

  function selfPostCard() {

    var directive = {
      restrict: 'E',
      controller: 'ContentCardController',
      controllerAs: 'cardVM',
      templateUrl: 'app/content/_content.self.post.card.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
