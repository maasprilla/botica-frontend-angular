(function() {
    'use strict';

    angular.module('app.administrarpedido-usuario.controller', []).controller('administrarPedidoUsuarioCtrl', administrarPedidoUsuarioCtrl);


    administrarPedidoUsuarioCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'ZonasEnvios', 'Pedidos', 'MedicamentoRespuestaPedido', 'RespuestaPedido'];

    function administrarPedidoUsuarioCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos, MedicamentoRespuestaPedido, RespuestaPedido) {

        var vm = this;

        vm.numerorespuestas = 0;
        vm.totalrespuestapedidomodal=0;
        vm.numerorespuestaspedido = function(str) {
            console.log(str);
            vm.numerorespuestas = MedicamentoRespuestaPedido.findByIdRespuestaPedido({
                idMedicamentoHasRespuesta: str
            }).length;
            console.log(MedicamentoRespuestaPedido.findByIdRespuestaPedido({
                idMedicamentoHasRespuesta: str
            }));

        }

        vm.pedidosenespera = Pedidos.findByidEstadoPedidoAndUsuario({
            idEstadoPedido: 1
        });

        vm.pedidosconcretados = Pedidos.findByidEstadoPedidoAndUsuario({
            idEstadoPedido: 3
        });

        vm.respuestaspedidos = RespuestaPedido.findByIdUsuario();


        vm.moreCurrentPedido = null;
        vm.updateCurrentPedido = function(str) {
            vm.moreCurrentPedido = Pedidos.get({
                idPedido: str
            });
            console.log(vm.moreCurrentPedido);
        }

        vm.moreCurrentRespuestaPedido = null;
        vm.updateCurrentRespuestaPedido = function(str) {
            vm.moreCurrentRespuestaPedido = RespuestaPedido.get({
                idRespuestaPedido: str
            }).$promise.then(function(data){
              vm.moreCurrentRespuestaPedido=data;
              vm.totalrespuestapedidomodal=vm.calcularTotal();
              console.log(vm.moreCurrentRespuestaPedido);

            });
        }

        vm.calcularTotal = function() {
            var total = 0;

            if (vm.moreCurrentRespuestaPedido!=null) {
                for (var i = 0; i < vm.moreCurrentRespuestaPedido.medicamentoHasRespuestaPedidoList.length; i++) {
                    if (vm.moreCurrentRespuestaPedido.medicamentoHasRespuestaPedidoList[i].precio != null) {
                        var precio = vm.moreCurrentRespuestaPedido.medicamentoHasRespuestaPedidoList[i].precio * vm.moreCurrentRespuestaPedido.medicamentoHasRespuestaPedidoList[i].cantidad;
                        total += precio;
                    }
                }
            }


            return total;

        }

        vm.updatePedido=function(){
          vm.moreCurrentRespuestaPedido.idPedido.idEstadoPedido.idEstadoPedido=3;
          Pedidos.update(vm.moreCurrentRespuestaPedido.idPedido, function() {

                  $mdToast.show(
                      $mdToast.simple()
                          .textContent('Se ha  Aceptado el Pedido...')
                          .position('bottom right'));
                        },function (error) {
                          $mdToast.show(
                            $mdToast.simple()
                            .textContent('Error al Aceptar Pedido')
                            .position('bottom right'));

              });
              console.log('guardar');
              console.log(vm.moreCurrentRespuestaPedido.idPedido);
        }



    }

})();
