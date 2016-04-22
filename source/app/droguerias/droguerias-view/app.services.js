(function () {
    'use strict';
    angular.module('app.droguerias.view.services', [

    ])

        .factory('Droguerias', Droguerias);

        Droguerias.$inject=['$resource', 'BASEURL'];


        function Droguerias($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario' }
          )
        }


})();
