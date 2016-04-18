(function () {
    'use strict';
    angular.module('app.realizarpedido.services', [

    ])

        .factory('ZonasEnvios', ZonasEnvios);

        ZonasEnvios.$inject=['$resource', 'BASEURL'];


        function ZonasEnvios($resource, BASEURL) {
            return $resource(BASEURL + '/zonasenvios/')
        }


})();
