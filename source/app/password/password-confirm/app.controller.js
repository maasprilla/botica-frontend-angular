(function(){
  'use strict';

  angular.module('app.password.confirm.controller', [
  ]).controller('passConfirmCtrl', passConfirmCtrl);


  passConfirmCtrl.$inject = ['$location', '$mdToast', '$stateParams', 'ConfirmPass', 'Usuarios'];
  function passConfirmCtrl($location, $mdToast, $stateParams,ConfirmPass, Usuarios){

    var vm=this;

    vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
    console.log(vm.usuario);

    vm.enviar=function(){

        ConfirmPass.save(vm.confirm, function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Su contraseña ha sido cambiada')
                        .position('bottom right'));
                      },function (error) {
                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('Su contraseña no ha sido cambiada')
                          .position('bottom right'));

            });
    }
  }





})();
