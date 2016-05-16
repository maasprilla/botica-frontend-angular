(function(){
  'use strict';

  angular.module('app.password.recovery.controller', [
  ]).controller('passRecoveryCtrl', passRecoveryCtrl);


  passRecoveryCtrl.$inject = ['$location', '$mdToast', 'RecoveryPass'];
  function passRecoveryCtrl($location, $mdToast, RecoveryPass){

    var vm=this;

    vm.enviar=function(){

        RecoveryPass.save(vm.recovery, function() {
                $location.path('/');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se Enviado Un email a tu correo Electronico...')
                        .position('bottom right'));
                      },function (error) {
                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('el email ya se encuentra registrado')
                          .position('bottom right'));

            });
    }
  }





})();
