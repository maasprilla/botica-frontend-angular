(function(){
  'use strict';

  angular.module('app.usuarios.view.controller', [
  ]).controller('usuariosViewCtrl', usuariosViewCtrl);


  usuariosViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios'];
  function usuariosViewCtrl($stateParams, $location, $mdToast, Usuarios){
         this.usuario = Usuarios.get({ idUsuario: $stateParams.idUsuario });
         console.log(this.usuario);
    }

})();
