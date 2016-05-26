(function(){
  'use strict';

  angular.module('app.droguerias.list.controller', [
  ]).controller('drogueriaListCtrl', drogueriaListCtrl);

  drogueriaListCtrl.$inject = ['$q', '$location', '$mdToast','Usuarios', 'NgTableParams'];
  function drogueriaListCtrl($q, $location, $mdToast, Usuarios, NgTableParams){

        var vm=this;

    activate();

      function activate() {
          var promises = [getDroguerias()];
          return $q.all(promises).then(function() {

          });
      }

          function getDroguerias() {

       return Usuarios.findById({idRol:'DROG'}
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
