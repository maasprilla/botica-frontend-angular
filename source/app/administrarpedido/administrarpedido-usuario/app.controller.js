(function() {
    'use strict';

    angular.module('app.administrarpedido-usuario.controller', []).controller('administrarPedidoUsuarioCtrl', administrarPedidoUsuarioCtrl);


    administrarPedidoUsuarioCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'ZonasEnvios', 'Pedidos'];

    function administrarPedidoUsuarioCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos) {

        var vm = this;

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
