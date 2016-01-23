(function () {
  'use strict';

  angular
    .module('reco.content.directives')
    .directive('cardHeader', cardHeader);

  function cardHeader() {

    var directive = {
      restrict: 'E',
      //controller: 'HeaderController',
      //controllerAs: 'headerVM',
      templateUrl: 'app/content/_content.card.header.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
