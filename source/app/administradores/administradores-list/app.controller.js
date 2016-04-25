(function(){
  'use strict';

  angular.module('app.administradores.list.controller', [
  ]).controller('administradoresListCtrl', administradoresListCtrl);


  administradoresListCtrl.$inject = ['$location', 'Usuarios'];
  function administradoresListCtrl($location, Usuarios){

    var vm = this;
    vm.administrador = Usuarios.query();




  }
})();
