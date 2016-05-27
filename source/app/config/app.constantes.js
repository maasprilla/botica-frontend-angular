(function(){
  'use strict';

  angular.module('app.config',[

  ]).constant('BASEURL',


    // 'http://localhost:31833/botica-backend-java/webresources')

    'http://localhost:8080/botica-backend-java/webresources')

    .config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
     function configure($authProvider, BASEURL){
       //Parametros De configuracion satellizer
       $authProvider.loginUrl = BASEURL + '/auth/login';
       $authProvider.tokenName = 'token';
       $authProvider.tokenPrefix = 'Botica';
     }



})();
