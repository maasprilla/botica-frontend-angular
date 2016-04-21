(function(){
  'use strict';

  angular.module('app.droguerias.list.controller', [
  ]).controller('drogueriaListCtrl', drogueriaListCtrl);

  drogueriaListCtrl.$inject = ['$location', 'Usuarios'];
  function drogueriaListCtrl($location, Usuarios){

    var vm = this;
    vm.usuarios = Usuarios.query();
}
})();
