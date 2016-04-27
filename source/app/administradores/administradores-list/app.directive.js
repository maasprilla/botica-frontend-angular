(function(){
    'use strict';

    angular.module('app.administradores.list.directive', [

    ]).directive('listadministrador', listadministrador);

    function listadministrador(){
      return{
        scope:{},
        templateUrl:'app/administradores/administradores-list/admin-list.html',
        controller: 'administradoresListCtrl',
        controllerAs: 'vm'

      };
    }

})();
