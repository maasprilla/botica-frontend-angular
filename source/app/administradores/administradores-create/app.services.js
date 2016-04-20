(function () {
    'use strict';
    angular.module('app.administradores.create.services', [

    ])
        .factory('Ciudades', Ciudades)
        .factory('Administradores', Administradores);


        Ciudades.$inject = ['$resource', 'BASEURL'];

        function Ciudades($resource, BASEURL) {
            return $resource(BASEURL + '/ciudades/:idCiudad',
            { idCiudad: '@idCiudad' }
          )
        }


        function Administradores($resource, BASEURL) {
            return $resource(BASEURL + '/administradores/:idAdministrador',
            { idUsuario: '@idAdministrador' }
          )
        }


})();
