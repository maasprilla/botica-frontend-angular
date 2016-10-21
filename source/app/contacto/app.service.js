(function () {
    'use strict';
    angular.module('app.contacto-service', [
    ]).factory('Contact', Contact);


        function Contact() {

          var EmailCtrl = require('app/contacto/app.controller.js/ContactFormController');
          //email route
          router.post('/contacto', EmailCtrl.sendMail);
        }


})();
