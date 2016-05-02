(function () {
    'use strict';
    angular.module('app.ciudades.services', [

    ])
        .factory('Ciudades', Ciudades);


        Ciudades.$inject = ['$resource', 'BASEURL'];

        function Ciudades($resource, BASEURL) {
            return $resource(BASEURL + '/ciudades/:idCiudad',
            { idCiudad: '@idCiudad' },
            {
                foundByNombre: {
                    url: BASEURL + '/ciudades/nombre/:nombre',
                    method: 'GET',
                    isArray: true,
                    params: {
                        nombre:'@nombre'
                    }
                }
            })
        }


       


})();
