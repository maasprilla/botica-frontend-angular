(function () {
    'use strict';
    angular.module('app.usuarios.services', [

    ])
        .factory('Usuarios', Usuarios);





        function Usuarios($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario' },
            { 'update': {method: 'PUT'}
          })
        }


})();
