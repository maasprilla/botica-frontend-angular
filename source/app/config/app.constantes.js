(function(){
  'use strict';

  angular.module('app.config',[

  ]).constant('BASEURL',
<<<<<<< HEAD
    'http://localhost:43096/botica-backend-java/webresources')
=======
    'http://localhost:8080/botica-backend-java/webresources')
>>>>>>> 794df787aee9783e3c5aa21fe401ebbe72d360c1
    .config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
     function configure($authProvider, BASEURL){
       //Parametros De configuracion satellizer
       $authProvider.loginUrl = BASEURL + '/auth/login';
       $authProvider.tokenName = 'token';
       $authProvider.tokenPrefix = 'Botica';
     }



})();
