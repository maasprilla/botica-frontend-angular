(function(){
  'use strict';

  angular.module('app.droguerias.view.controller', [
  ]).controller('drogueriasViewCtrl', drogueriasViewCtrl);


  drogueriasViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios'];
  function drogueriasViewCtrl($stateParams, $location, $mdToast, Usuarios){
         this.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
         console.log(this.usuario);
    }

})();
