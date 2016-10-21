(function() {
  'use strict';
  angular.module('app.contacto-controller', [
  ]).controller('ContactFormController', ContactFormController);

  function ContactFormController($mdToast, $http) {

    var exports;

    var vm = this;
    this.sendMail = function() {

    var data = ({
      contactName : this.contactName,
      contactEmail : this.contactEmail,
      contactMsg : this.contactMsg
    });

    // Simple POST request example (passing data):
    $http.post('/contacto', data).
      success(function(data, status, headers, config) {

      // this.sendMail = function() {
      //   $mdToast.show(
      //       $mdToast.simple().textContent('El mensaje ha sido enviado'))
      //       .position('bottom right');
      //   };

      $mdToast.show(
          $mdToast.simple().textContent('El mensaje ha sido enviado')
          .position('bottom right')
      );

    }).
    error(function(data, status, headers, config) {

      // this.sendMail = function(error){
      //   $mdToast.show(
      //     $mdToast.simple().textContent('No se pudo enviar el mensaje'))
      //     .position('bottom right');
      //   });

      $mdToast.show(
          $mdToast.simple().textContent('No se pudo enviar el mensaje')
          .position('bottom right')
      );

    });

    exports.sendMail = function(req, res) {

      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport();

      var data = req.body;

      transporter.sendMail({
        from: data.contactEmail,
        to: 'softdevcorporation@gmail.com',
        subject: 'Mensaje de' + data.contactName,
        text: data.contactMsg
      });
    };

    }

  }
})();
