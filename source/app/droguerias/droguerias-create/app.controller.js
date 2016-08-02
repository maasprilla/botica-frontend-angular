(function(){
  'use strict';

  angular.module('app.droguerias.create.controller', [
  ]).controller('drogueriaCreateCtrl', drogueriaCreateCtrl);


  drogueriaCreateCtrl.$inject = ['$location', '$mdToast', 'Usuarios', 'Ciudades'];
  function drogueriaCreateCtrl($location, $mdToast, Ususarios,Ciudades){

    var vm=this;

    vm.idciudades;

    vm.create=function(){
        vm.usuario.idRol={idRol:'DROG'};
        Ususarios.save(vm.usuario , function() {
                $location.path('/registrodroguerias');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  guardado el Usuario...')
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





})();
