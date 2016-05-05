(function(){
    'use strict';

    angular.module('app.droguerias.create.directive', [

    ]).directive('registrodroguerias', registrodroguerias);

    registrodroguerias.$inject = [];
    function registrodroguerias(){
      return{
        scope:{},
        templateUrl:'app/droguerias/droguerias-create/droguerias-create.html',
        controller: 'drogueriaCreateCtrl',
        controllerAs: 'vm'
      };
    }

})();
