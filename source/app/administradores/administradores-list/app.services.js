(function () {
    'use strict';
    angular.module('app.administradores.list.services', [

    ])

        .factory('Administradores', Administradores);



        function Administradores ($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario' }
          )
        }




})();
