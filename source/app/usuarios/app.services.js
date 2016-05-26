(function () {
    'use strict';
    angular.module('app.usuarios.services', [

    ])
        .factory('Usuarios', Usuarios);





        function Usuarios($resource, BASEURL) {
            return $resource(BASEURL + '/usuarios/:idUsuario',
            { idUsuario: '@idUsuario'},
            { 'update': {method: 'PUT'},
                findByIdAndCode: {
                    url: BASEURL + '/usuarios/idcodigo/:idUsuario/:codigoRecuperacionPass',
                    method: 'GET',
                    params: {
                        idUsuario:'@idUsuario',
                        codigoRecuperacionPass:'@codigoRecuperacionPass',
                    }
                },
                updatePass: {
                    url: BASEURL + '/usuarios/passconfirm/:idUsuario',
                    method: 'PUT',
                    params: {
                        idUsuario:'@idUsuario'
                    }
                },
                findById: {
                    url: BASEURL + '/usuarios/roles/:idRol',
                    method: 'GET',
                    isArray: true,
                    params: {
                        idRol:'@idRol'
                    }
                }
            })
        }


})();
