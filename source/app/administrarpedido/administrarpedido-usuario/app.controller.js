(function() {
    'use strict';

    angular.module('app.administrarpedido-usuario.controller', []).controller('administrarPedidoUsuarioCtrl', administrarPedidoUsuarioCtrl);


    administrarPedidoUsuarioCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'ZonasEnvios', 'Pedidos', 'MedicamentoRespuestaPedido'];

    function administrarPedidoUsuarioCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos, MedicamentoRespuestaPedido) {

        var vm = this;

        vm.numerorespuestas=0;
        vm.numerorespuestaspedido=function(str){
          console.log(str);
          vm.numerorespuestas= MedicamentoRespuestaPedido.findByIdRespuestaPedido({idMedicamentoHasRespuesta:str}).length;
          console.log(MedicamentoRespuestaPedido.findByIdRespuestaPedido({idMedicamentoHasRespuesta:str}));

        }

        vm.pedidosenespera = Pedidos.findByidEstadoPedido({
            idEstadoPedido: 1
        });

        vm.moreCurrentPedido = null;
        vm.updateCurrentPedido=function(str) {
            vm.moreCurrentPedido = Pedidos.get({
                idPedido: str
            });
            console.log(vm.moreCurrentPedido);
        }



    }

})();
