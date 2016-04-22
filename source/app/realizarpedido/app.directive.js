(function(){
  'use strict';

  angular.module('app.realizarpedido.directive', [

  ]).directive('realizarpedido', realizarpedido);

  function realizarpedido(){
    return{
      scope:{},
      templateUrl:'app/realizarpedido/realizarpedido.html',
      controller: 'realizarPedidoCreateCtrl',
      controllerAs: 'vm'
    };
  }

})();
