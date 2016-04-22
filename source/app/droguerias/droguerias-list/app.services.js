(function () {
    'use strict';
    angular.module('app.droguerias.list.services', [

    ])
        .factory('Usuarios', Usuarios);




        function Usuarios($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario' }
          )
        }


})();
