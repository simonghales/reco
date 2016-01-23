(function() {
  'use strict';

  angular
    .module('reco.content.controllers')
    .controller('ContentCardController', ContentCardController);

  /** @ngInject */
  function ContentCardController($log) {
    var vm = this;

    vm.states = {
      liked: false,
      disliked: false
    };

    vm.toggleLike = toggleLike;
    vm.toggleDislike = toggleDislike;

    function toggleLike() {
      vm.states.disliked = false;
      vm.states.liked = !vm.states.liked;
    }

    function toggleDislike() {
      vm.states.liked = false;
      vm.states.disliked = !vm.states.disliked;
    }

  }
})();
