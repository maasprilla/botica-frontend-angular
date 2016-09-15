(function(){
  'use strict';

  angular.module('app.droguerias.edit.controller', [
  ]).controller('drogueriasEditCtrl', drogueriasEditCtrl);


  drogueriasEditCtrl.$inject = ['$stateParams','$location', '$mdToast','Usuarios', '$q'];
  function drogueriasEditCtrl($stateParams, $location, $mdToast, Usuarios, $q){
          var vm=this;

          vm.usuario = {};
           vm.loadFoto = loadFoto;


         vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });

         console.log(vm.usuario);

         vm.isLocation=null;
         activate();

           function activate() {
               var promises = [getUsuarios()];
               return $q.all(promises).then(function() {

               });
           }

        function getUsuarios() {

         return Usuarios.get({idUsuario: $stateParams.idUsuario }
         ).$promise.then(function(data) {
           console.log('data');
           console.log(data);
           vm.info=data;





         });

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
