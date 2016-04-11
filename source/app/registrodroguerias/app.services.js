(function () {
    'use strict';
    angular.module('app.registrodroguerias.services', [

    ])
        .factory('Ciudades', Ciudades)
        .factory('Usuarios', Usuarios);


        Ciudades.$inject = ['$resource', 'BASEURL'];

        function Ciudades($resource, BASEURL) {
            return $resource(BASEURL + '/ciudades/:idCiudad',
            { idCiudad: '@idCiudad' }
          )
        }


        function Usuarios($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario' }
          )
        }


})();
