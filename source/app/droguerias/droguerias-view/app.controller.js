(function(){
  'use strict';

  angular.module('app.droguerias.view.controller', [
  ]).controller('drogueriasViewCtrl', drogueriasViewCtrl);


  drogueriasViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios', 'FileUploader'];
  function drogueriasViewCtrl($stateParams, $location, $mdToast, Usuarios, FileUploader){
          var vm=this;
         vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
         console.log(vm.usuario);
         vm.uploader = new FileUploader();
         
    }

})();
