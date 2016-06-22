(function(){
  'use strict';

  angular.module('app.administrarpedido-drogueria.controller', [
  ]).controller('administrarPedidoDrogueriaCtrl', administrarPedidoDrogueriaCtrl);


  administrarPedidoDrogueriaCtrl.$inject = ['$stateParams','$location', '$mdToast','ZonasEnvios','Pedidos'];
  function administrarPedidoDrogueriaCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos){

    var vm=this;

    vm.pedidosenespera=Pedidos.findByidEstadoPedido({idEstadoPedido: 1});



  }

})();
