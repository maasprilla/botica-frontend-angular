(function(){
    'use strict';

    angular.module('app.contacto.directive', [

    ]).directive('contacto', contacto);

    contacto.$inject = [];
    function contacto(){
      return{
        scope:{},
        templateUrl:'app/contacto/contacto.html',
        controller:'ContactFormController',
        controllerAs:'vm'
      };
    }

})();
