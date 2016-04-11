(function(){
  'use strict';

  angular.module('app.registrodroguerias.controller', [
  ]).controller('drogueriaCreateCtrl', drogueriaCreateCtrl);


  drogueriaCreateCtrl.$inject = ['Usuarios', 'Ciudades'];
  function drogueriaCreateCtrl(Ususarios,Ciudades){

    var vm=this;
    vm.ciudades=Ciudades.query();

    vm.idciudades;

    vm.create=function(){
        vm.idciudades=getIdCiudad(vm.ciudad)
        vm.usuario.ciudad={ciudadPK:{idCiudad:vm.idciudades[0], iddepartamento:vm.idciudades[1]}};
        vm.usuario.idRol={idRol:2};
        Ususarios.save(vm.usuario);
    }



  }

  function getIdCiudad(id){
    var array = id.split('-');
    console.log(array.length)
    return array;
  }



})();
