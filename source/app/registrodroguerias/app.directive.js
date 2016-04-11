(function(){
    'use strict';

    angular.module('app.registrodroguerias.directive', [

    ]).directive('registrodroguerias', registrodroguerias);

    function registrodroguerias(){
      return{
        scope:{},
        templateUrl:'app/registrodroguerias/registrodroguerias.html',
        controller: 'drogueriaCreateCtrl',
        controllerAs: 'vm'
      };
    }

})();
