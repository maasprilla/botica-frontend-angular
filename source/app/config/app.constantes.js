(function(){
  'use strict';

  angular.module('app.config',[

  ]).constant('BASEURL',


<<<<<<< HEAD
    'http://localhost:8080/botica-backend-java/webresources')
=======
    'http://localhost:43096/botica-backend-java/webresources')
>>>>>>> 48f30eeeff56a30e176ee830bef167138e8dcde4
    .config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
     function configure($authProvider, BASEURL){
       //Parametros De configuracion satellizer
       $authProvider.loginUrl = BASEURL + '/auth/login';
       $authProvider.tokenName = 'token';
       $authProvider.tokenPrefix = 'Botica';
     }



})();
