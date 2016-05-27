(function(){
  'use strict';

  angular.module('app.administrarpedido-usuario.directive', [

  ]).directive('administrarpedidousuario',administrarpedidousuario);

  administrarpedidousuario.$inject = [];
  function administrarpedidousuario(){
    return {
      scope:{},
      templateUrl:'app/administrarpedido/administrarpedido-usuario/administrarpedido.html',
      controller: 'administrarPedidoUsuarioCtrl',
      controllerAs: 'vm'
  };
  }

})();
