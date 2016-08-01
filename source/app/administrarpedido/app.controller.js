(function(){
  'use strict';

  angular.module('app.administrarpedido.list.controller', [
  ]).controller('administrarPedidoListoCtrl', administrarPedidoListoCtrl);


  administrarPedidoListoCtrl.$inject = ['$location', '$mdToast', 'Pedidos'];
  function administrarPedidoListoCtrl($location, $mdToast, Pedidos){

    var vm=this;

    

    vm.pedidos=Pedidos.query();
    console.log(vm.pedidos);

    






  }




})();
