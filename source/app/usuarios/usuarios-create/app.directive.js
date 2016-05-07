(function(){
    'use strict';

    angular.module('app.usuarios.create.directive', [

    ]).directive('registrousuario', registrousuario)
    .directive('numbersonly', numbersonly);

    registrousuario.$inject = [];
    function registrousuario(){
      return{
        scope:{},
        templateUrl:'app/usuarios/usuarios-create/usuarios-create.html',
        controller: 'usuariosCreateCtrl',
        controllerAs: 'vm'
      }
    }

    numbersonly.$inject = [];
    function numbersonly(){
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            var validateNumber = function (inputValue) {
                var maxLength = 20;
                if (attrs.max) {
                    maxLength = attrs.max;
                }
                if (inputValue === undefined) {
                    return '';
                }
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    ctrl.$setViewValue(transformedInput);
                    ctrl.$render();
                }
                if (transformedInput.length > maxLength) {
                    transformedInput = transformedInput.substring(0, maxLength);
                    ctrl.$setViewValue(transformedInput);
                    ctrl.$render();
                }
                var isNotEmpty = (transformedInput.length === 0) ? true : false;
                ctrl.$setValidity('notEmpty', isNotEmpty);
                return transformedInput;
            };

            ctrl.$parsers.unshift(validateNumber);
            ctrl.$parsers.push(validateNumber);
            attrs.$observe('notEmpty', function () {
                validateNumber(ctrl.$viewValue);
            });
        }
      };
    }

})();
