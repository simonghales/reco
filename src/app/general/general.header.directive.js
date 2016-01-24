(function () {
  'use strict';

  angular
    .module('reco.general.directives')
    .directive('siteHeader', siteHeader);

  function siteHeader() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_header.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
