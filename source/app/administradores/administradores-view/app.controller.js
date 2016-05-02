(function(){
  'use strict';

  angular.module('app.administradores.view.controller', [
  ]).controller('administradoresViewCtrl', administradoresViewCtrl);


  administradoresViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios'];
  function administradoresViewCtrl($stateParams, $location, $mdToast, Usuarios){
         this.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
         console.log(this.usuario);
    }

})();
