(function(){
    'use strict';

    angular.module('app.droguerias.view.directive', [

    ]).directive('drogueriasview', drogueriasview);

    function drogueriasview(){
      return{
        scope:{},
        templateUrl:'app/droguerias/droguerias-view/droguerias-view.html',
        controller: 'drogueriasViewCtrl',
        controllerAs: 'vm'
      }
    }

})();
