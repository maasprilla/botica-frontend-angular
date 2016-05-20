(function(){
  'use strict';

  angular.module('app.realizarpedido.controller', [
  ]).controller('realizarPedidoCreateCtrl', realizarPedidoCreateCtrl);


  realizarPedidoCreateCtrl.$inject = ['$location', '$mdToast','ZonasEnvios','Pedidos'];
  function realizarPedidoCreateCtrl($location, $mdToast, ZonasEnvios, Pedidos ){

    var vm=this;
    vm.zonasenvios=ZonasEnvios.query();

    vm.readonly=true;

    vm.nombreproducto;
    var productos=new Array();

    vm.contenidopedido=[];
    vm.addProducto=function(){
      

      var cantProductos=productos.length;
      productos[cantProductos]=vm.nombreproducto;

      
      for (var i = 0; i<productos.length ; i++) {
        vm.contenidopedido [i]= 
            {nombre: productos[i]};        
      }


      var descripcionpedido='';
      for (var i = 0; i<productos.length ; i++) {
        descripcionpedido += productos[i]+'-';        
      }
      console.log('contenido');
      vm.producto.descripcion=descripcionpedido;
      console.log(vm.producto);


      
    }

    vm.create=function(){
        console.log(vm.producto);
        Pedidos.save(vm.producto, function() {
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
