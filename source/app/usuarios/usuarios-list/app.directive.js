(function(){
    'use strict';

    angular.module('app.usuarios.list.directive', [

    ]).directive('listausuario', listausuario);

    listausuario.$inject = [];
    function listausuario(){
      return{
        scope:{},
        templateUrl:'app/usuarios/usuarios-list/usuarios-list.html',
        controller: 'usuariosListCtrl',
        controllerAs: 'vm'
      }
    }


})();
