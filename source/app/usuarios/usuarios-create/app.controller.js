(function(){
  'use strict';

  angular.module('app.usuarios.create.controller', [
  ]).controller('usuariosCreateCtrl', usuariosCreateCtrl);


  usuariosCreateCtrl.$inject = ['$auth','$location', '$mdToast','Usuarios', 'Ciudades'];
  function usuariosCreateCtrl($auth,$location, $mdToast, Ususarios ,Ciudades){

    var vm=this;
    vm.ciudades=Ciudades.query();
    vm.dateMax=new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear()-18);



  //  vm.idciudades;

    vm.create=function(){
    //    vm.idciudades=getIdCiudad(vm.ciudad)
     //   vm.usuario.ciudad={ciudadPK:{idCiudad:vm.idciudades[0], iddepartamento:vm.idciudades[1]}};
        vm.usuario.idRol={idRol:'USER'};
        console.log(vm.usuario);
        Ususarios.save(vm.usuario, function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha guardado el Usuario...')
                        .position('bottom right'));
                      },function (error) {
                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('el email ya se encuentra registrado')
                          .position('bottom right'));

            });
    }


    vm.foundCiudadesByNombre= function(nombre){
        return Ciudades.foundByNombre({
            nombre:nombre
        });
    }







  }

  getIdCiudad.$inject = ['id'];
  function getIdCiudad(id){
    var array = id.split('-');
    return array;
  }



})();
