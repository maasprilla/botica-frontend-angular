(function() {
    'use strict';

    angular.module('app.realizarpedido.controller', []).controller('realizarPedidoCreateCtrl', realizarPedidoCreateCtrl);


    realizarPedidoCreateCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'ZonasEnvios', 'Pedidos', 'Ciudades', 'Medicamentos', '$mdDialog', '$scope'];

    function realizarPedidoCreateCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos, Ciudades, Medicamentos, $mdDialog, $scope) {

        var vm = this;
        vm.medicamentosAutocomplete;

        vm.search = function() {
                vm.foundMedicamentosByNombre();
            }
            //
            // vm.currentuser=$stateParams.idUsuario;
            //
            // vm.producto={idusuario:{idUsuario:vm.currentuser}, idEstadoPedido:{idEstadoPedido:1}};
            //
            //
            vm.zonasenvios=ZonasEnvios.query();
            //
            // vm.ciudades=Ciudades.query();
            //
            // vm.readonly=true;
            //
            //vm.nombreproducto;
        vm.productos = new Array();

        //vm.contenidopedido=[];
        vm.addProducto = function(item) {


            var cantProductos = vm.productos.length;

            var isAdd = vm.addCantidad(item);
            if (isAdd == false) {
                vm.productos[cantProductos] = {
                    medicamento: item,
                    cantidad: 1
                };
            }
            console.log('mis productos');
            console.log(vm.productos);


            // for (var i = 0; i<productos.length ; i++) {
            //   vm.contenidopedido [i]=
            //       {nombre: productos[i]};
            // }
            //
            //
            // var descripcionpedido='';
            // for (var i = 0; i<productos.length ; i++) {
            //   descripcionpedido += productos[i]+'-';
            // }
            // console.log('contenido');
            // //vm.producto.descripcion=descripcionpedido;
            // vm.nombreproducto=" ";



        }

        vm.addCantidad = function(item) {
            for (var i = 0; i < vm.productos.length; i++) {
                if (vm.productos[i].medicamento.idMedicamento == item.idMedicamento) {
                    vm.productos[i].cantidad++;
                    return true;
                }
            }
            return false;
        }

        vm.cantidadPedida = function(item) {
            for (var i = 0; i < vm.productos.length; i++) {
                if (vm.productos[i].medicamento.idMedicamento == item.idMedicamento) {
                     return vm.productos[i].cantidad;
                }
            }
            return 0;
        }


        vm.create=function(){
          console.log('mis productos');
          console.log(vm.productos);
            vm.pedido={pedidoHasMedicamentoList:vm.productos};
            console.log(vm.pedido);
            Pedidos.save(vm.pedido, function() {
                    $location.path('/administrarpedido/usuario');
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Se ha  guardado el Pedido...')
                            .position('bottom right'));
                          },function (error) {
                            $mdToast.show(
                              $mdToast.simple()
                              .textContent('el pedido esta mal')
                              .position('bottom right'));

                });
        }

        vm.showTabDialog = function(ev) {
    $mdDialog.show({
      //controller: 'realizarPedidoCreateCtrl',
      //controllerAs:'vm',
      templateUrl: 'app/realizarpedido/panelpedido.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
  };

        vm.foundCiudadesByNombre = function(nombre) {
            return Ciudades.foundByNombre({
                nombre: nombre
            });
        }

        vm.foundMedicamentosByNombre = function() {
            vm.medicamentosAutocomplete = Medicamentos.foundByNombre({
                nombre: vm.searchMedicamento
            });
        }

        $scope.hide = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };

    }





})();
