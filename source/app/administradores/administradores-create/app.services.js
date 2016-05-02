(function () {
    'use strict';
    angular.module('app.administradores.create.services', [

    ])
        .factory('Administradores', Administradores);


       
      


        function Administradores($resource, BASEURL) {
            return $resource(BASEURL + '/administradores/:idAdministrador',
            { idUsuario: '@idAdministrador' }
          )
        }


})();
