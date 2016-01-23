(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('linkCard', linkCard);

  function linkCard() {

    var directive = {
      restrict: 'E',
      controller: 'ContentCardController',
      controllerAs: 'cardVM',
      templateUrl: 'app/content/_content.link.card.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
