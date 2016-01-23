(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('audioCard', audioCard);

  function audioCard() {

    var directive = {
      restrict: 'E',
      controller: 'ContentCardController',
      controllerAs: 'cardVM',
      templateUrl: 'app/content/_content.audio.card.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
