(function(){
  'use strict';

  angular.module('app.administradores.view.controller', [
  ]).controller('administradoresViewCtrl', administradoresViewCtrl);


  administradoresViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios', 'FileUploader'];
  function administradoresViewCtrl($stateParams, $location, $mdToast, Usuarios, FileUploader){
        var vm=this;
         vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
         console.log(vm.usuario);
         vm.uploader = new FileUploader();
    }

})();
