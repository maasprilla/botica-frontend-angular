(function(){
    'use strict';

    angular.module('app.usuarios.view.directive', [

    ]).directive('usuariosview', usuariosview);

    function usuariosview(){
      return{
        scope:{},
        templateUrl:'app/usuarios/usuarios-view/usuarios-view.html',
        controller: 'usuariosViewCtrl',
        controllerAs: 'vm'
      }
    }

})();
