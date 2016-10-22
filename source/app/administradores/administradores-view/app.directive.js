(function(){
    'use strict';

    angular.module('app.administradores.view.directive', [

    ]).directive('administradoresview', administradoresview);

    administradoresview.$inject = [];
    function administradoresview(){
      return{
        scope:{},
        templateUrl:'app/administradores/administradores-view/administradores-view.html',
        controller: 'administradoresViewCtrl',
        controllerAs: 'vm'
      }
    }

})();
