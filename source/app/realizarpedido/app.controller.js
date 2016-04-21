(function(){
  'use strict';

  angular.module('app.realizarpedido.controller', [
  ]).controller('realizarPedidoCreateCtrl', realizarPedidoCreateCtrl);


  realizarPedidoCreateCtrl.$inject = ['$location', '$mdToast','ZonasEnvios'];
  function realizarPedidoCreateCtrl($location, $mdToast, ZonasEnvios ){

    var vm=this;
    vm.zonasenvios=ZonasEnvios.query();

    vm.producto;
    var productos=[];

    vm.addProducto=function(){
      var cantProductos=productos.length;
      console.log(cantProductos);
      productos[cantProductos]=vm.producto;
      console.log(productos);
    }






  }





})();
