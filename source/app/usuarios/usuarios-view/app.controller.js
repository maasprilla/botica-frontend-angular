(function(){
  'use strict';

  angular.module('app.usuarios.view.controller', [
  ]).controller('usuariosViewCtrl', usuariosViewCtrl);


  usuariosViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios','FileUploader'];
  function usuariosViewCtrl($stateParams, $location, $mdToast, Usuarios, FileUploader){
    var vm=this;
         vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
         vm.uploader = new FileUploader();

         vm.info=function(){
          console.log('info');
          console.log(vm.uploader.queue);
          }

         }
         

})();
