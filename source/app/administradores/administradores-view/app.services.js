(function () {
    'use strict';
    angular.module('app.administradores.view.services', [

    ])

        .factory('Administradores', Administradores);

        Administradores.$inject=['$resource', 'BASEURL'];


        function Administradores($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
              { idUsuario: '@idUsuario' }
            )
        }


})();
