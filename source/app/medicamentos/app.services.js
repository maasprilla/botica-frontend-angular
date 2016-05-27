(function () {
    'use strict';
    angular.module('app.medicamentos.services', [

    ])
        .factory('Medicamentos', Medicamentos);


        Medicamentos.$inject = ['$resource', 'BASEURL'];

        function Medicamentos($resource, BASEURL) {
            return $resource(BASEURL + '/medicamentos/:idMedicamento',
            { idMedicamento: '@idMedicamento' },
            {
                foundByNombre: {
                    url: BASEURL + '/medicamentos/nombre/:nombre',
                    method: 'GET',
                    isArray: true,
                    params: {
                        nombre:'@nombre'
                    }
                }
            })
        }





})();
