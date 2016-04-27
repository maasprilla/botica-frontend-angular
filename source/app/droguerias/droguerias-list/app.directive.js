(function(){
    'use strict';

    angular.module('app.droguerias.list.directive', [

    ]).directive('listdroguerias', listDroguerias);

    function listDroguerias(){
      return{
        scope:{},
        templateUrl:'app/droguerias/droguerias-list/droguerias-list.html',
        controller: 'drogueriaListCtrl',
        controllerAs: 'vm'
      };
    }

})();
