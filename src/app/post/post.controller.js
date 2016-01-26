(function() {
  'use strict';

  angular
    .module('reco')
    .controller('PostController', PostController);

  /** @ngInject */
  function PostController($log) {
    var vm = this;

    vm.data = {
      comments: [
        {
          text: 'boop',
          replies: [
            {
              text: 'boop'
            },
            {
              text: 'boop2'
            },
            {
              text: 'boop3'
            }
          ]
        },
        {
          text: 'shoop'
        },
        {
          text: 'shoop2'
        },
        {
          text: 'doop',
          replies: [
            {
              text: 'doop2'
            },
            {
              text: 'noop',
              replies: [
                {
                  text: 'noop2'
                },
                {
                  text: 'noop3'
                },
                {
                  text: 'noop4'
                }
              ]
            }
          ]
        }
      ]
    };

    vm.models = {
      comment: ''
    };

    _activate();

    function _activate() {

    }

  }
})();
