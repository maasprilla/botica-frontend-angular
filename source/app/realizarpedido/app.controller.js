(function() {
    'use strict';

    angular.module('app.realizarpedido.controller', []).controller('realizarPedidoCreateCtrl', realizarPedidoCreateCtrl);


    realizarPedidoCreateCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'ZonasEnvios', 'Pedidos', 'Ciudades', 'Medicamentos'];

    function realizarPedidoCreateCtrl($stateParams, $location, $mdToast, ZonasEnvios, Pedidos, Ciudades, Medicamentos) {

        var vm = this;
        vm.medicamentosAutocomplete;

        vm.search = function() {
                console.log('cambio');
                vm.foundMedicamentosByNombre();
            }
            //
            // vm.currentuser=$stateParams.idUsuario;
            //
            // vm.producto={idusuario:{idUsuario:vm.currentuser}, idEstadoPedido:{idEstadoPedido:1}};
            //
            //
            // vm.zonasenvios=ZonasEnvios.query();
            //
            // vm.ciudades=Ciudades.query();
            //
            // vm.readonly=true;
            //
            //vm.nombreproducto;
        var productos = new Array();

        //vm.contenidopedido=[];
        vm.addProducto = function(item) {


            var cantProductos = productos.length;

            var isAdd = vm.addCantidad(item);
            if (isAdd == false) {
                productos[cantProductos] = {
                    medicamento: item,
                    cantidad: 1
                };
            }
            console.log('mis productos');
            console.log(productos);


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
            for (var i = 0; i < productos.length; i++) {
                if (productos[i].medicamento.idMedicamento == item.idMedicamento) {
                    productos[i].cantidad++;
                    console.log('suma');
                    return true;
                }
            }
            console.log('nada');
            return false;
        }

        vm.cantidadPedida = function(item) {
            for (var i = 0; i < productos.length; i++) {
                if (productos[i].medicamento.idMedicamento == item.idMedicamento) {
                    console.log('igual');
                    return productos[i].cantidad;
                }
            }
            return 0;
        }

        //
        // vm.create=function(){
        //     //vm.producto.medicamentoList=vm.contenidopedido;
        //     vm.producto.medicamentoList=productos;
        //     vm.producto.cantidad=5;
        //     console.log(vm.producto);
        //     Pedidos.save(vm.producto, function() {
        //             $location.path('/administrarpedido/usuario');
        //             $mdToast.show(
        //                 $mdToast.simple()
        //                     .textContent('Se ha  guardado el Pedido...')
        //                     .position('bottom right'));
        //                   },function (error) {
        //                     $mdToast.show(
        //                       $mdToast.simple()
        //                       .textContent('el pedido esta mal')
        //                       .position('bottom right'));
        //
        //         });
        // }

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

    }

})();
