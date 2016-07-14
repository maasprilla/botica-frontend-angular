(function(){
  'use strict';

  angular.module('app.respuestapedido-services',[

  ]).factory('RespuestaPedido', RespuestaPedido)
  .factory('MedicamentoRespuestaPedido', MedicamentoRespuestaPedido);

  RespuestaPedido.$inject = ['$resource', 'BASEURL'];
  function RespuestaPedido($resource, BASEURL) {
      return $resource(BASEURL + '/respuestaspedidos/:idRespuestaPedido', {
          idRespuestaPedido: '@idRespuestaPedido'
      },{
        'update':{
          method:'PUT'
        },
        findByIdUsuario:{
          url:BASEURL + '/respuestaspedidos/usuario/:idUsuario',
          method:'GET',
          isArray:true,
          params:{
            idUsuario:'@idUsuario'
          }

        }
      })
  }

  MedicamentoRespuestaPedido.$inject = ['$resource', 'BASEURL'];
  function MedicamentoRespuestaPedido($resource, BASEURL) {
      return $resource(BASEURL + '/medicamentoshasrespuestaspedidos/:idMedicamentoHasRespuesta', {
          idMedicamentoHasRespuesta: '@idMedicamentoHasRespuesta'
      },{
        'update':{
          method:'PUT'
        },
        findByIdRespuestaPedido:{
          url:BASEURL + '/medicamentoshasrespuestaspedidos/respuestapedido/:idMedicamentoHasRespuesta',
          method:'GET',
          isArray:true,
          params:{
            idMedicamentoHasRespuesta:'@idMedicamentoHasRespuesta'
          }

        }
      })
  }


})();
