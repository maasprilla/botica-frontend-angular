(function(){
  'use strict';

  angular.module('app.usuarios.list.controller', [
  ]).controller('usuariosListCtrl', usuariosListCtrl);


  usuariosListCtrl.$inject = ['$location', '$mdToast','Usuarios'];
  function usuariosListCtrl($location, $mdToast, Usuarios){

    var vm=this;
    vm.usuarios=Usuarios.query();
    vm.idciudades;


    vm.create=function(){
        vm.idciudades=getIdCiudad(vm.ciudad)
        vm.usuario.ciudad={ciudadPK:{idCiudad:vm.idciudades[0], iddepartamento:vm.idciudades[1]}};
        vm.usuario.idRol={idRol:1};

    }



  }

  function getIdUsuario(id){
    var array = id.split('-');
    return array;
  }



})();
