(function(){
  'use strict';

  angular.module('app.administrarpedido-drogueria.directive', [

  ]).directive('administrarpedidodrogueria',administrarpedidodrogueria);

  administrarpedidodrogueria.$inject = [];
  function administrarpedidodrogueria(){
    return {
      scope:{},
      templateUrl:'app/administrarpedido/administrarpedido-drogueria/administrarpedido.html',
      controller: 'administrarPedidoDrogueriaCtrl',
      controllerAs: 'vm'
  };
  }

})();
