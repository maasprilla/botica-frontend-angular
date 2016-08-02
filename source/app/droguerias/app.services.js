(function () {
    'use strict';
    angular.module('app.droguerias.services', [

    ])
        .factory('Droguerias', Droguerias);





        function Droguerias($resource, BASEURL) {
            return $resource(BASEURL + '/droguerias/:idDroguerias',
            { idDroguerias: '@idDroguerias'},
            { 'update': {method: 'PUT'},
                findDrogueriaByNombre: {
                    url: BASEURL + '/usuarios/nombredrogueria/:nombre',
                    method: 'GET',
                    isArray:true,
                    params: {
                        nombre:'@nombre'
                    }
                }
            }
          )
        }


})();
