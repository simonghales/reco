(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('cardFooter', cardFooter);

  function cardFooter() {

    var directive = {
      restrict: 'E',
      //controller: 'HeaderController',
      //controllerAs: 'headerVM',
      templateUrl: 'app/content/_content.card.footer.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
