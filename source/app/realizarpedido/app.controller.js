(function(){
  'use strict';

  angular.module('app.realizarpedido.controller', [
  ]).controller('realizarPedidoCreateCtrl', realizarPedidoCreateCtrl);


  realizarPedidoCreateCtrl.$inject = ['$location', '$mdToast','ZonasEnvios','Pedidos'];
  function realizarPedidoCreateCtrl($location, $mdToast, ZonasEnvios, Pedidos ){

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

    vm.create=function(){
        console.log(vm.pedidos);
        Pedidos.save(vm.pedidos, function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  guardado el Pedido...')
                        .position('bottom right'));
                      },function (error) {
                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('el pedido esta mal')
                          .position('bottom right'));

            });
    }








  }





})();
