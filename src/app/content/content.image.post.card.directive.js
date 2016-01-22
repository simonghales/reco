(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('imagePostCard', imagePostCard);

  function imagePostCard() {

    var directive = {
      restrict: 'E',
      //controller: 'HeaderController',
      //controllerAs: 'headerVM',
      templateUrl: 'app/content/_content.image.post.card.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
