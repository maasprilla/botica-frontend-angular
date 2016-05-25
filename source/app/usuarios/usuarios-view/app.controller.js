(function(){
  'use strict';

  angular.module('app.usuarios.view.controller', [
  ]).controller('usuariosViewCtrl', usuariosViewCtrl);


  usuariosViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios','FileUploader'];
  function usuariosViewCtrl($stateParams, $location, $mdToast, Usuarios, FileUploader){
    var vm=this;

         vm.usuario = {};
         vm.loadFoto = loadFoto;


         vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
         vm.uploader = new FileUploader();



         vm.info=function(){
          console.log('info');
          console.log(vm.uploader.queue);
        }


        vm.update = function() {
            Usuarios.update(vm.usuario, function() {
                //$location.path('/categorias');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  actualizado el usuario...')
                        .position('bottom right'));
            });
        }

        function loadFoto($fileContent) {
     vm.usuario.imgPerfil = $fileContent;
   }

  }




})();
