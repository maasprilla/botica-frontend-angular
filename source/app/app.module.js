(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMessages',
        'ngMaterial',
        'satellizer',
        'ngTable',
        'angularFileUpload',
        'uiGmapgoogle-maps',
        '720kb.datepicker',
        //'templates',
        'app.config',
        'app.footer',
        'app.header',
        'app.ciudades',
        'app.home',
        'app.usuarios',
        'app.droguerias',
        'app.login',
        'app.administradores',
        'app.administrarpedido',
        'app.realizarpedido',
        'app.listarpedidos',
        'app.medioambiente',
        'app.portafolioservicios',
        'app.bienvenido',
        'app.password.recovery',
        'app.password.confirm',
        'app.geolocalizacion',
        'app.imagenes'
    ]);

})();
