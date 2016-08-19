(function(){
  'use strict';

  angular.module('app.administrarpedido-drogueria.controller', [
  ]).controller('administrarPedidoDrogueriaCtrl', administrarPedidoDrogueriaCtrl);


  administrarPedidoDrogueriaCtrl.$inject = ['$stateParams','$location', '$mdToast','ZonasEnvios','Pedidos', 'RespuestaPedido'];
  function administrarPedidoDrogueriaCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos, RespuestaPedido){

    var vm=this;
    vm.a=RespuestaPedido.get({idRespuestaPedido:1});
    console.log(vm.a);
    vm.respuesta;
    vm.respuesta={idPedido:null,medicamentoHasRespuestaPedidoList:null};


    vm.pedidosenespera=Pedidos.findByidEstadoPedido({idEstadoPedido: 1});
    vm.respuestaspedidos=RespuestaPedido.findByIdUsuario();
    vm.total=0;

    vm.moreCurrentPedido = null;
    vm.updateCurrentPedido=function(str) {
        vm.moreCurrentPedido = Pedidos.get({
            idPedido: str
        });
        console.log(vm.moreCurrentPedido);
    }

    vm.create=function(){
      console.log(vm.moreCurrentPedido);
      vm.respuesta.idPedido={idPedido:vm.moreCurrentPedido.idPedido}
      vm.respuesta.medicamentoHasRespuestaPedidoList=vm.moreCurrentPedido.pedidoHasMedicamentoList;
      console.log('respuesta');
      console.log(vm.respuesta);

      RespuestaPedido.save(vm.respuesta, function() {
        vm.respuesta=null;
              $location.path('/administrarpedido/drogueria');
              $mdToast.show(
                  $mdToast.simple()
                      .textContent('Se ha  Enviado una Respuesta...')
                      .position('bottom right'));
                    },function (error) {
                      $mdToast.show(
                        $mdToast.simple()
                        .textContent('Error al Enviar Respuesta')
                        .position('bottom right'));

          });

    }

    vm.calcularTotal=function(){
      vm.total=0;
      for (var i = 0; i < vm.moreCurrentPedido.pedidoHasMedicamentoList.length; i++) {
        if(vm.moreCurrentPedido.pedidoHasMedicamentoList[i].precio!=null){
        var precio=vm.moreCurrentPedido.pedidoHasMedicamentoList[i].precio*vm.moreCurrentPedido.pedidoHasMedicamentoList[i].cantidad;
        vm.total+=precio;
      }
      }
      console.log(vm.moreCurrentPedido);

    }



  }

})();
