(function(){
  'use strict';

  angular.module('app.usuarios.list.controller', [
  ]).controller('usuariosListCtrl', usuariosListCtrl);


  usuariosListCtrl.$inject = ['$q', '$location', '$mdToast','Usuarios', 'NgTableParams'];
  function usuariosListCtrl($q, $location, $mdToast, Usuarios, NgTableParams){

    var vm=this;

    activate();

      function activate() {
          var promises = [getUsuarios()];
          return $q.all(promises).then(function() {

          });
      }

          function getUsuarios() {

        return Usuarios.findById({idRol:'USER'}
        ).$promise.then(function(data) {
          console.log('data');
          console.log(data);
          vm.info=data;

          vm.usersTable = new NgTableParams({
                page: 1,
                count: 5
            }, {
                total: vm.info.length,
                getData: function ($defer, params) {
                    vm.data = vm.info.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    $defer.resolve(vm.data);
                    console.log(vm.data);
                }
            });

        });

      }

  }





})();
