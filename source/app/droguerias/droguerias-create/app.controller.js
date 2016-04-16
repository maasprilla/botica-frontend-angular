(function(){
  'use strict';

  angular.module('app.droguerias.create.controller', [
  ]).controller('drogueriaCreateCtrl', drogueriaCreateCtrl);


  drogueriaCreateCtrl.$inject = ['$location', '$mdToast', 'Usuarios', 'Ciudades'];
  function drogueriaCreateCtrl($location, $mdToast, Ususarios,Ciudades){

    var vm=this;
    vm.ciudades=Ciudades.query();

    vm.idciudades;

    vm.create=function(){
        vm.idciudades=getIdCiudad(vm.ciudad)
        vm.usuario.ciudad={ciudadPK:{idCiudad:vm.idciudades[0], iddepartamento:vm.idciudades[1]}};
        vm.usuario.idRol={idRol:2};
        Ususarios.save(vm.usuario , function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  guardado el Usuario...')
                        .position('bottom right'));
        });
    }



  }

  function getIdCiudad(id){
    var array = id.split('-');
    return array;
  }



})();
