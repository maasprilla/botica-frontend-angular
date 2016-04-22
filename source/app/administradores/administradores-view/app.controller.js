(function(){
  'use strict';

  angular.module('app.administradores.view.controller', [
  ]).controller('administradoresViewCtrl', administradoresViewCtrl);


  administradoresViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Administradores'];
  function administradoresViewCtrl($stateParams, $location, $mdToast, Administradores){
         this.usuario = Administradores.get({idUsuario: $stateParams.idAdministrador });
         console.log(this.usuario);
    }

})();
