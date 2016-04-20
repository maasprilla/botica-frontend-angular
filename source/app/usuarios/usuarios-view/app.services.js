(function () {
    'use strict';
    angular.module('app.usuarios.view.services', [

    ])

        .factory('Usuarios', Usuarios);

        Usuarios.$inject=['$resource', 'BASEURL'];


        function Usuarios($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario' }
          )
        }


})();
