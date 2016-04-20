(function(){
  'use strict';

  angular.module('app.administradores.create.controller', [
  ]).controller('administradoresCreateCtrl', administradoresCreateCtrl);


  administradoresCreateCtrl.$inject = ['$location', '$mdToast','Usuarios', 'Ciudades'];
  function administradoresCreateCtrl($location, $mdToast, Administradores ,Ciudades){

    var vm=this;
    vm.ciudades=Ciudades.query();

    vm.idciudades;

    vm.create=function(){
        vm.idciudades=getIdCiudad(vm.ciudad)
        vm.administrador.ciudad={ciudadPK:{idCiudad:vm.idciudades[0], iddepartamento:vm.idciudades[1]}};
        vm.administrador.idRol={idRol:1};
        Administradores.save(vm.administrador, function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  guardado el Administrador...')
                        .position('bottom right'));
            });
    }



  }

  function getIdCiudad(id){
    var array = id.split('-');
    return array;
  }



})();
