(function(){
  'use strict';

  angular.module('app.administradores.create.controller', [
  ]).controller('administradoresCreateCtrl', administradoresCreateCtrl);


  administradoresCreateCtrl.$inject = ['$location', '$mdToast','Usuarios', 'Ciudades'];
  function administradoresCreateCtrl($location, $mdToast, Administradores ,Ciudades){

    var vm=this;
    vm.ciudades=Ciudades.query();


    vm.create=function(){
        vm.administrador.idRol={idRol:'ADMIN'};
        console.log(vm.administrador);
        Administradores.save(vm.administrador, function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  guardado el Administrador...')
                        .position('bottom right'));
            });
    }

    vm.foundCiudadesByNombre= function(nombre){
        return Ciudades.foundByNombre({
            nombre:nombre
        });
    }



  }




})();
