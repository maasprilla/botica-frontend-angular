(function(){
  'use strict';

  angular.module('app.administrarpedido.directive', [

  ]).directive('administrarpedido',administrarpedido);

  administrarpedido.$inject = [];
  function administrarpedido(){
    return {
      scope:{},
      templateUrl:'app/administrarpedido/administrarpedido.html',
      controller: 'administrarPedidoListoCtrl',
      controllerAs: 'vm'
  };
  }

})();
