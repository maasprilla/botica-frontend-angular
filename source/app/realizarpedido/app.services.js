(function() {
    'use strict';
    angular.module('app.realizarpedido.services', [

    ])

    .factory('ZonasEnvios', ZonasEnvios)
        .factory('Pedidos', Pedidos)
        .factory('PedidosTemporales', PedidosTemporales);

    ZonasEnvios.$inject = ['$resource', 'BASEURL'];




    function ZonasEnvios($resource, BASEURL) {
        return $resource(BASEURL + '/zonasenvios/:idZonaEnvio', {
            idZonaEnvio: '@idZonaEnvio'
        })
    }

    function Pedidos($resource, BASEURL) {
        return $resource(BASEURL + '/pedidos/:idPedido', {
            idPedido: '@idPedido'
        }, {
            'update': {
                method: 'PUT'
            },
            findByidEstadoPedidoAndUsuario: {
                url: BASEURL + '/pedidos/estadoPedidoAndUsuario/:idEstadoPedido',
                method: 'GET',
                isArray: true,
                params: {
                    idEstadoPedido: '@idEstadoPedido'
                }
            },
            findByidEstadoPedido: {
                url: BASEURL + '/pedidos/estadoPedido/:idEstadoPedido',
                method: 'GET',
                isArray: true,
                params: {
                    idEstadoPedido: '@idEstadoPedido'
                }
            }
        })
    }

    function PedidosTemporales() {

        return {
            CurrentPedido: [],
        };

    }







})();
