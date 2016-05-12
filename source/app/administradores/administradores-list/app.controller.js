(function(){
  'use strict';

  angular.module('app.administradores.list.controller', [
  ]).controller('administradoresListCtrl', administradoresListCtrl);


  administradoresListCtrl.$inject = ['$q', '$location', '$mdToast','Usuarios', 'NgTableParams'];
  function administradoresListCtrl($q, $location, $mdToast, Usuarios, NgTableParams){

       var vm=this;

    activate();

      function activate() {
          var promises = [getUsuarios()];
          return $q.all(promises).then(function() {

          });
      }

          function getUsuarios() {

        return Usuarios.query(
        ).$promise.then(function(data) {
          console.log('data');
          console.log(data);
          vm.info=data;

          vm.usersTable = new NgTableParams({
                page: 1,
                count: 5
            }, {
                counts: [5,10,20,50,100],
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
