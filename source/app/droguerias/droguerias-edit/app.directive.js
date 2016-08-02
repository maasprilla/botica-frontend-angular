(function(){
    'use strict';

    angular.module('app.droguerias.edit.directive', [

    ]).directive('drogueriasedit', drogueriasedit);

    drogueriasedit.$inject = [];
    function drogueriasedit(){
      return{
        scope:{},
        templateUrl:'app/droguerias/droguerias-edit/droguerias-view.html',
        controller: 'drogueriasEditCtrl',
        controllerAs: 'vm'
      }
    }

})();
