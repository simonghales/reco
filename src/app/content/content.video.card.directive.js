(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('videoCard', videoCard);

  function videoCard() {

    var directive = {
      restrict: 'E',
      controller: 'ContentCardController',
      controllerAs: 'cardVM',
      templateUrl: 'app/content/_content.video.card.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
