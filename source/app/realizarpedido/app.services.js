(function () {
    'use strict';
    angular.module('app.realizarpedido.services', [

    ])

        .factory('ZonasEnvios', ZonasEnvios)
        .factory('Pedidos', Pedidos);

        ZonasEnvios.$inject=['$resource', 'BASEURL'];




        function ZonasEnvios($resource, BASEURL) {
            return $resource(BASEURL + '/zonasenvios/:idZonaEnvio',
            { idZonaEnvio: '@idZonaEnvio' }
          )
        }

        function Pedidos($resource, BASEURL) {
            return $resource(BASEURL + '/pedidos/:idPedido',
            { idPedido: '@idPedido' }
          )
        }







})();
